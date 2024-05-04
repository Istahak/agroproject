from typing import List
import models, schemas, utils
from fastapi import APIRouter, Depends, HTTPException, status,APIRouter
from sqlalchemy.orm import Session
from database import get_db
from oauth2 import get_current_user


router = APIRouter()


@router.get("/chat/{chat_id}", response_model=List[schemas.ChatHistoryBase])
def get_chat_history(chat_id: str,db: Session = Depends(get_db)):
    chat_his = db.query(models.ChatHistory).filter(models.ChatHistory.chat_id == chat_id).all()
    # sort based on timestamp
    chat_his.sort(key=lambda x: x.timestamp)
    return chat_his
    
    
    


@router.post("/chat", response_model=schemas.ChatHistoryBase)
def create_chat_history(chat: schemas.ChatHistoryBase, db: Session = Depends(get_db)):
    db_chat = models.ChatHistory(**chat.model_dump())
    db.add(db_chat)
    db.commit()
    db.refresh(db_chat)
    return db_chat