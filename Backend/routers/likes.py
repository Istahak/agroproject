from typing import List

from sqlalchemy import func
import models, schemas, utils
from fastapi import APIRouter, Depends, HTTPException, status,APIRouter
from sqlalchemy.orm import Session
from database import get_db
from oauth2 import get_current_user

router = APIRouter() 

@router.post("/likes", response_model=schemas.Like)
def like_post(like: schemas.LikeCreate, db: Session = Depends(get_db), current_user: schemas.UserOut = Depends(get_current_user)):
    # Check if the user has already liked or disliked the post
    existing_like = db.query(models.Like).filter_by(post_id=like.post_id, author_id=current_user.user_id).first()
    
    if existing_like:
        raise HTTPException(
            status_code=400,
            detail="You have already liked or disliked this post.",
        )
        
    # Create a new like object with the provided data
    db_like = models.Like(**like.model_dump(), author_id=current_user.user_id)
    db.add(db_like)
    db.commit()
    db.refresh(db_like)
    
    if like.Type == "like":
            db.query(models.Post).filter(models.Post.id == like.post_id).update({"likes_count": models.Post.likes_count + 1})
    elif like.Type == "dislike":
        db.query(models.Post).filter(models.Post.id == like.post_id).update({"dislikes_count": models.Post.dislikes_count + 1})
        
    db.commit()
    
    return db_like

# Endpoint to count likes and dislikes for a post by post_id
@router.get("/posts/{post_id}/likes-dislikes/count", response_model=dict)
def count_post_likes_dislikes(post_id: int, db: Session = Depends(get_db)):
    likes_count = (
        db.query(func.count(models.Like.id))
        .filter(models.Like.post_id == post_id, models.Like.Type == "like")
        .scalar()
    )
    dislikes_count = (
        db.query(func.count(models.Like.id))
        .filter(models.Like.post_id == post_id, models.Like.Type == "dislike")
        .scalar()
    )
    
    if not likes_count and not dislikes_count:
        raise HTTPException(
            status_code=404,
            detail="No likes or dislikes found for this post.",
        )
    
    return {"likes_count": likes_count, "dislikes_count": dislikes_count}

    
    