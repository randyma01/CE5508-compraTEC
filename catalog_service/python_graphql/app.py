import os
import socket
from flask import Flask
from flask_graphql import GraphQLView
from flask_pymongo import PyMongo
from flask_mongoengine import MongoEngine, MongoEngineSessionInterface
from pymongo import MongoClient
from mongoengine import connect
from src.schemas.schema import schema

db = MongoEngine()

app = Flask(__name__)

MONGODB_HOST = os.environ.get('MONGODB_HOST')
MONGODB_PORT = 27017

app.config['MONGODB_SETTINGS'] = {
    'db': 'compraTEC',
    'host': MONGODB_HOST,
    'port': MONGODB_PORT
}
db.init_app(app)


app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
