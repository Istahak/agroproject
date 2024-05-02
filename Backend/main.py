from typing import Optional
from fastapi import Body, Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from requests import Session
from sqlalchemy.orm import Session
import models
from database import engine, get_db
import models, schemas as schemas,utils

from fastapi.middleware.cors import CORSMiddleware

from routers import user, auth

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(user.router)
app.include_router(auth.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

