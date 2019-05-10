import graphene
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField, ReferenceField, StringField, IntField
)


class Flower(Document):
    meta = {'collection': 'flower'}
    name = StringField()
    price = IntField()
    color = StringField()
    stock = IntField()