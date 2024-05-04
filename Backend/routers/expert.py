import models, schemas, utils
from fastapi import APIRouter, Depends, HTTPException, status,APIRouter
from sqlalchemy.orm import Session
from database import get_db


router = APIRouter()




@router.get("/experts", response_model=list[schemas.Expert])
def get_experts(db: Session = Depends(get_db)):
    return db.query(models.Expert).all()


@router.post("/experts/", response_model=schemas.Expert)
def create_expert(expert: schemas.ExpertCreate, db: Session = Depends(get_db)):
    db_expert = models.Expert(**expert.model_dump())
    db.add(db_expert)
    db.commit()
    db.refresh(db_expert)
    return db_expert

@router.put("/experts/{expert_id}", response_model=schemas.Expert)
def update_expert(expert_id: int, expert: schemas.ExpertUpdate, db: Session = Depends(get_db)):
    db_expert = db.query(models.Expert).filter(models.Expert.id == expert_id).first()
    if db_expert is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Expert not found")
    for var, value in vars(expert).items():
        setattr(db_expert, var, value) if value is not None else None
    db.commit()
    db.refresh(db_expert)
    return db_expert

@router.delete("/experts/{expert_id}", response_model=schemas.Expert)
def delete_expert(expert_id: int, db: Session = Depends(get_db)):
    db_expert = db.query(models.Expert).filter(models.Expert.id == expert_id).first()
    if db_expert is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Expert not found")
    db.delete(db_expert)
    db.commit()
    return db_expert
