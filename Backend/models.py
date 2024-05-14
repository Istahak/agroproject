
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
    role = Column(String,nullable=False)
    
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
    

class Like(Base):
    __tablename__ = "likes"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    post_id = Column(Integer, ForeignKey("posts.id") ,nullable=False)
    author_id = Column(Integer, ForeignKey("users.id") ,nullable=False)
    Type = Column(String, nullable=False)
    author = relationship("Users")
    post = relationship("Post")
    

class Task(Base):
    __tablename__ = "task_history"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    contain = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.now(timezone.utc))
    Due_at = Column(DateTime, nullable=True,default=None)
    status = Column(String, nullable=False,default="Pending")
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    author = relationship("Users")        


class CropInfo(Base):
    __tablename__ = 'crop_info'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    variety = Column(String,default=None)
    land_and_soil = Column(String,default=None)
    seed_rate = Column(String,default=None)
    seed_cleaning = Column(String,default=None)
    seed_treatment_and_soaking = Column(String,default=None)
    seedbed_preparation_and_care = Column(String,default=None)
    sowing_seeds_in_seedbed = Column(String,default=None)
    seedling_age = Column(String,default=None)
    seedling_number = Column(String,default=None)
    spacing = Column(String,default=None)    
    land_preparation_and_transplanting = Column(String,default=None)
    fertilizer_amount = Column(String,default=None)
    use_of_urea_super_granules = Column(String,default=None)
    irrigation = Column(String,default=None)
    weed_control = Column(String,default=None)
    insect_and_disease_control = Column(String,default=None)
    harvesting_time = Column(String,default=None)
    post_harvest_and_storage = Column(String,default=None)
    image_url = Column(String,default=None)  # Add image URL column
    info_source = Column(String,default=None)  # Add information source column    