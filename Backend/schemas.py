
from datetime import datetime
import fastapi
from pydantic import BaseModel,EmailStr
import sqlalchemy
from typing import List, Optional



class User(BaseModel):
    Username: str
    email: EmailStr
    password: str

class UserOut(User):
    id: int
    username: str
    email: EmailStr
    class Config:
        orm_mode = True

class UserLogin(BaseModel):
    email: str
    password: str
    remember_me: Optional[bool] = False

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: Optional[str] = None    



class ExpertBase(BaseModel):
    name: str
    specialty: str
    image_url: Optional[str] = None
    qualifications: Optional[str] = None
    achievements: Optional[List[str]] = None

class ExpertCreate(ExpertBase):
    pass


class ExpertUpdate(ExpertBase):
    pass

class Expert(ExpertBase):
    id: int

    class Config:
        orm_mode = True



class ChatHistoryBase(BaseModel):
    chat_id: Optional[str]
    sender: bool
    message: str
    timestamp: datetime
    
    



class PostBase(BaseModel):
    content: str
    image_url: Optional[str] = None

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id : int
    likes_count : Optional[int]
    dislikes_count : Optional[int]
    author_id: int
    timestamp: datetime
    author : User

    class Config:
        orm_mode = True

class CommentBase(BaseModel):
    content: str

class CommentCreate(CommentBase):
    post_id: int

class Comment(CommentCreate):
    id: int
    
    timestamp: datetime
    author_id: int
    author : User

    class Config:
        orm_mode = True

class LikeBase(BaseModel):
    Type: str

class LikeCreate(LikeBase):
    post_id: int

class Like(LikeBase):
    id: int
    post_id: int
    author_id: int
    author: User

    class Config:
        orm_mode = True
    

class Task(BaseModel):
    contain: str
    Due_at : Optional[datetime] = None

class TaskUpdate(Task):
    status: str

class TaskOut(TaskUpdate):
    id: int
    created_at: datetime
    author_id : int
    author: User

    class Config:
        orm_mode = True        


class CropInfo(BaseModel):
    id: int
    name: str
    variety: Optional[str]
    land_and_soil: Optional[str]
    seed_rate: Optional[str]
    seed_cleaning: Optional[str]
    seed_treatment_and_soaking: Optional[str]
    seedbed_preparation_and_care: Optional[str]
    sowing_seeds_in_seedbed: Optional[str]
    seedling_age: Optional[str]
    seedling_number: Optional[str]
    spacing: Optional[str]
    land_preparation_and_transplanting: Optional[str]
    fertilizer_amount: Optional[str]
    use_of_urea_super_granules: Optional[str]
    irrigation: Optional[str]
    weed_control: Optional[str]
    insect_and_disease_control: Optional[str]
    harvesting_time: Optional[str]
    post_harvest_and_storage: Optional[str]
    image_url: Optional[str]  # Optional image URL field
    info_source: Optional[str]  # Optional information source field        