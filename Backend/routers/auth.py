from datetime import timedelta
from fastapi import APIRouter, Depends, status, HTTPException, Response
from sqlalchemy.orm import Session 
import schemas, models, database, utils,oauth2


router = APIRouter(tags=['Authentication'])

@router.post('/login', status_code=status.HTTP_200_OK)
def login(request: schemas.UserLogin, db: Session = Depends(database.get_db)):
    user = db.query(models.Users).filter(models.Users.email == request.email).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invalid email or password")
    if not utils.verify(request.password, user.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invalid email or password")
    
    access_token_expires = timedelta(days=30) if request.remember_me else timedelta(days=1)
    access_token = oauth2.create_access_token(data={"user_id": user.id}, expires_delta=access_token_expires)
    
    return {"access_token": access_token, "token_type": "bearer"}