import os
import socket
from flask import Flask
from flask_graphql import GraphQLView
from flask_pymongo import PyMongo
from flask_mongoengine import MongoEngine, MongoEngineSessionInterface
from pymongo import MongoClient
from mongoengine import connect
from src.database import init_db
from src.schemas.schema import schema

db = MongoEngine()

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': 'compraTEC',
    'host': 'localhost',
    'port': 27017
}
db.init_app(app)


app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

if __name__ == "__main__":
    #init_db()
    #db = client.compraTEC
    #app.session_interface = MongoEngineSessionInterface(db)

    app.run(host='0.0.0.0', port=8080)
