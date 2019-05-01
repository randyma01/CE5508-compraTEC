
import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from model import Flower as FlowerModel

class Flower(MongoengineObjectType):
    class Meta:
        model = FlowerModel
        interfaces = (Node,)


class Query(graphene.ObjectType):
    node = Node.Field()
    get_flowers = graphene.Field(Flower)
    all_flowers = MongoengineConnectionField(Flower)

schema = graphene.Schema(query=Query, types=[Flower])