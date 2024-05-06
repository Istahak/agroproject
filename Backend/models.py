
import datetime
from pytz import utc
from sqlalchemy import JSON, Column, Date, ForeignKey, Integer, String,Boolean,DateTime
from database import Base
from datetime import datetime, timezone
from sqlalchemy.orm import relationship

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
    
    

class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    content = Column(String, nullable=False)
    image_url = Column(String, nullable=True)
    likes_count = Column(Integer,nullable = True,default=0)
    dislikes_count = Column(Integer,nullable = True,default=0)
    timestamp = Column(DateTime, default=datetime.now(timezone.utc))
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    author = relationship("Users")
    
 
   
class Comment(Base):
    __tablename__ = "comments"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    post_id = Column(Integer, ForeignKey("posts.id") ,nullable=False)
    content = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.now(timezone.utc))
    author_id = Column(Integer,ForeignKey("users.id"), nullable=False)
    author = relationship("Users")
    post = relationship("Post")
    

class Like(Base):
    __tablename__ = "likes"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    post_id = Column(Integer, ForeignKey("posts.id") ,nullable=False)
    author_id = Column(Integer, ForeignKey("users.id") ,nullable=False)
    Type = Column(String, nullable=False)
    author = relationship("Users")
    post = relationship("Post")
    
        