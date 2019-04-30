
import graphene

class Query(graphene.ObjectType):

    user = graphene.String(name=graphene.String())

    def resolve_user(self, info, name):
        return 'Hello user ' + name 


schema = graphene.Schema(query=Query)