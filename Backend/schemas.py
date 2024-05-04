
from datetime import datetime
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
    id: int
    content: str
    image_url: Optional[str] = None

class PostCreate(PostBase):
    pass

class Post(PostBase):
    likes_count : Optional[int]
    author_id: int
    timestamp: datetime
    author : User

    class Config:
        orm_mode = True

class CommentBase(BaseModel):
    content: str

class CommentCreate(CommentBase):
    post_id: int

class Comment(CommentBase):
    id: int
    
    timestamp: datetime
    author_id: int
    author : User

    class Config:
        orm_mode = True

class LikeBase(BaseModel):
    author: str
    Type: str

class LikeCreate(LikeBase):
    post_id: int

class Like(LikeBase):
    id: int
    post_id: int
    author_id: int

    class Config:
        orm_mode = True
    