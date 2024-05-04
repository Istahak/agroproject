from typing import List
import models, schemas, utils
from fastapi import APIRouter, Depends, HTTPException, status,APIRouter
from sqlalchemy.orm import Session
from database import get_db
from oauth2 import get_current_user

router = APIRouter()


@router.post("/posts", response_model=schemas.Post)
def create_post(post: schemas.PostCreate, db: Session = Depends(get_db), current_user: schemas.UserOut = Depends(get_current_user)):
   db_post = models.Post(**post.model_dump(), author_id = current_user.user_id)
   db.add(db_post)
   db.commit()
   db.refresh(db_post)
   return db_post


@router.get("/posts", response_model=List[schemas.Post])
def get_posts(db: Session = Depends(get_db)):
    posts = db.query(models.Post).all()
    if not posts:
           raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No posts found")
    posts.sort(key = lambda x: x.timestamp, reverse = True)
    return posts   


@router.get("/posts/{author_id}",response_model=List[schemas.Post])
def get_posts_by_id(author_id: int,db: Session = Depends(get_db)):
       post = db.query(models.Post).filter(models.Post.author_id == author_id).all()
       if not post:
           raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No posts found")
       post.sort(key = lambda x: x.timestamp, reverse = True)
       return post

    
    
@router.delete("/posts/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(post_id: int, db: Session = Depends(get_db), current_user: schemas.UserOut = Depends(get_current_user)):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Post not found")
    if post.author_id != current_user.user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You are not allowed to delete this post")
    db.delete(post)
    db.commit()
    return {"detail": "Post deleted successfully"}    
    
   