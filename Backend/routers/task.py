import models, schemas, utils
from fastapi import APIRouter, Depends, HTTPException, status,APIRouter
from sqlalchemy.orm import Session
from database import get_db
from oauth2 import get_current_user 
from typing import List


router = APIRouter()


@router.post("/tasks", response_model=schemas.TaskOut)
def create_task(task: schemas.Task, db: Session = Depends(get_db), current_user: schemas.UserOut = Depends(get_current_user)):
    db_task = models.Task(**task.model_dump(), author_id=current_user.user_id)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


@router.get("/tasks", response_model=List[schemas.TaskOut])
def get_user_tasks(db: Session = Depends(get_db), current_user: schemas.UserOut = Depends(get_current_user)):
    tasks = db.query(models.Task).filter(models.Task.author_id == current_user.user_id).all()
    # sort tasks by due date
    # tasks.sort(key=lambda x: x.Due_at, reverse=False)
    return tasks


@router.put("/tasks/{task_id}", response_model=schemas.TaskOut)
def update_task_status(task_id: int, current_status, db: Session = Depends(get_db)):
    db_task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    setattr(db_task, "status", current_status)
    db.commit()
    db.refresh(db_task)
    return db_task

@router.delete("/tasks/{task_id}", response_model=schemas.TaskOut)
def delete_task(task_id: int, db: Session = Depends(get_db), current_user: schemas.UserOut = Depends(get_current_user)):
    db_task = db.query(models.Task).filter(models.Task.id == task_id, models.Task.author_id == current_user.user_id).first()
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    db.delete(db_task)
    db.commit()
    return db_task

