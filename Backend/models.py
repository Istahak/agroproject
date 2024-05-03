
import datetime
from sqlalchemy import JSON, Column, Date, Integer, String,Boolean,DateTime
from database import Base

class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True,autoincrement=True)
    Username = Column(String,nullable=False)
    email = Column(String,nullable=False)
    password = Column(String,nullable=False)
    
class Expert(Base):
    __tablename__ = "experts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    specialty = Column(String)
    image_url = Column(String, nullable=True)
    qualifications = Column(String, nullable=True)
    achievements = Column(JSON, nullable=True)


class ChatHistory(Base):
    __tablename__ = "chat_history"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    chat_id = Column(String)
    sender = Column(Boolean, nullable=False)
    message = Column(String, nullable=False)
    timestamp = Column(DateTime, nullable=False)