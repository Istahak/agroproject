import models, schemas, utils
from fastapi import APIRouter, Depends, HTTPException, status,APIRouter
from sqlalchemy.orm import Session
from database import get_db
from oauth2 import get_current_user
from typing import List

router = APIRouter()


# Create crop information
@router.post("/crop-info/", response_model=schemas.CropInfo)
def create_crop_info(crop_info: schemas.CropInfo, db: Session = Depends(get_db)):
    db_crop_info = models.CropInfo(**crop_info.model_dump())
    db.add(db_crop_info)
    db.commit()
    db.refresh(db_crop_info)
    return db_crop_info

# Get all crop information
@router.get("/crop-info/", response_model=List[schemas.CropInfo])
def get_all_crop_info(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return db.query(models.CropInfo).offset(skip).limit(limit).all()

# Get crop information by ID
@router.get("/crop-info/{crop_info_id}", response_model=schemas.CropInfo)
def get_crop_info_by_id(crop_info_id: int, db: Session = Depends(get_db)):
    db_crop_info = db.query(models.CropInfo).filter(models.CropInfo.id == crop_info_id).first()
    if db_crop_info is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Crop info not found")
    return db_crop_info

# Delete crop information by ID
@router.delete("/crop-info/{crop_info_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_crop_info_by_id(crop_info_id: int, db: Session = Depends(get_db)):
    db_crop_info = db.query(models.CropInfo).filter(models.CropInfo.id == crop_info_id).first()
    if db_crop_info is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Crop info not found")
    db.delete(db_crop_info)
    db.commit()
    return