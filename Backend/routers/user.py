from typing import List
import models, schemas, utils
from fastapi import APIRouter, Depends, HTTPException, Query, status,APIRouter
from sqlalchemy.orm import Session
from database import get_db
from oauth2 import get_current_user


router = APIRouter()



@router.get("/users",response_model=schemas.UserOut)
def users(db: Session = Depends(get_db)):
    users = db.query(models.Users).all()
    return users


#get current username using jwt token
@router.get("/users/me")
async def read_users_me(current_user: schemas.TokenData = Depends(get_current_user), db: Session = Depends(get_db)):
    user = db.query(models.Users).filter(models.Users.id == current_user.user_id).first()
    print(user)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return {"user_name": user.Username, "user_id":user.id}




@router.get("/users/{user_id}", response_model=schemas.UserOut)
def users(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.Users).filter(models.Users.id == user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    return user


@router.post("/addusers",status_code=status.HTTP_201_CREATED)
def addusers(user: schemas.User, db: Session = Depends(get_db)):
    
    if db.query(models.Users).filter(models.Users.email == user.email).first():
            raise HTTPException(status_code=400, detail="Email already registered")
    
    #hash the password - user.password
    hashed_password = utils.hash(user.password)
    user.password = hashed_password
    db_user = models.Users(**user.model_dump())
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@router.get("/usersrole/{role}", response_model=List[schemas.UserOut])
def users(role: str, db: Session = Depends(get_db)):
    users = db.query(models.Users).filter(models.Users.role == role).all()
    if not users:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No users found with the specified role")
    
    return users
