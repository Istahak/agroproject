
from datetime import datetime
from pydantic import BaseModel,EmailStr
import sqlalchemy
from typing import List, Optional



class User(BaseModel):
    Username: str
    email: EmailStr
    password: str

class UserOut(BaseModel):
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