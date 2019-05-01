# flask_graphene_mongo/database.py
from mongoengine import connect

from model import Flower

connect('compraTEC', host='mongodb://localhost:27017')

def init_db():
    testR = Flower(name='Rosa Blanda', price=1500, color='Rosada', stock=20)
    testR.save()