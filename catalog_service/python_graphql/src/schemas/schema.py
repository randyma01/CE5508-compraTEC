import graphene
from graphene_mongodb import MongoSchema
from ..models.model import Flower as FlowerModel
from mongoengine.fields import (
    DateTimeField, ReferenceField, StringField, IntField
)

class FlowerSchema(MongoSchema):
    model = FlowerModel

class CreateFlower(graphene.Mutation):
    name =graphene.String()
    price = graphene.Int()
    color = graphene.String()
    stock = graphene.Int()

    class Arguments:
        name = graphene.String()
        price = graphene.Int()
        color = graphene.String()
        stock = graphene.Int()

    def mutate(self, info, name, price, color, stock):
        newFlower = FlowerModel(name=name, price=price, color=color, stock=stock)
        newFlower.save()
        return newFlower

class DeleteFlower(graphene.Mutation):
    id = graphene.String()
    name = graphene.String()

    class Arguments:
        id =graphene.String()
        name =graphene.String()

    def mutate(self, info, id, name):
        deleteFlower = FlowerModel(id=id, name=name)
        deleteFlower.delete()
        return deleteFlower

class UpdateFlower(graphene.Mutation):
    id = graphene.String()
    name =graphene.String()
    price = graphene.Int()
    color = graphene.String()
    stock = graphene.Int()

    class Arguments:
        id =graphene.String()
        name =graphene.String()
        price = graphene.Int()
        color = graphene.String()
        stock = graphene.Int()

    def mutate(self, info, id, name, price, color, stock):
        updateFlower = FlowerModel(id=id)
        updateFlower.update(name=name, price=price, color=color, stock=stock)
        return updateFlower

class Mutations(graphene.ObjectType):
    create_flower = CreateFlower.Field()
    delete_flower = DeleteFlower.Field()
    update_flower = UpdateFlower.Field()


class Query(graphene.ObjectType):
    get_flowers = FlowerSchema.list

schema = graphene.Schema(query=Query, mutation=Mutations)