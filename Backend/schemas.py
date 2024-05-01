

from pydantic import BaseModel,EmailStr
import typing


class User(BaseModel):
    Username: str
    email: EmailStr
    password: str

class UserOut(BaseModel):
    username: str
    email: EmailStr
    class Config:
        orm_mode = True