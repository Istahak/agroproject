from sqlalchemy import Column, Date, Integer, String
from database import Base

class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True,autoincrement=True)
    Username = Column(String,nullable=False)
    email = Column(String,nullable=False)
    password = Column(String,nullable=False)
    
