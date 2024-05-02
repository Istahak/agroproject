

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

class UserLogin(BaseModel):
    email: str
    password: str
    remember_me: typing.Optional[bool] = False

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: typing.Optional[str] = None    