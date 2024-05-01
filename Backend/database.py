from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# Define database URL
# SQLALCHEMY_DATABASE_URL = "mysql+pymysql://username:password@host:port/database"
# SQLALCHEMY_DATABASE_URL = "mysql://root:123@localhost:3306/database/fastapi"
SQLALCHEMY_DATABASE_URL = 'sqlite:///./test.db'


# Create SQLAlchemy engine and session
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Define SQLAlchemy model
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()