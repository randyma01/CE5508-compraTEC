from flask import Flask
from flask_graphql import GraphQLView
from pymongo import MongoClient

from schema import schema

#print("Hello World from Python 3.7.2!!")

app = Flask(__name__)
 
app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))


@app.route("/")
def hello():
    return "Hi World! - Test Flask"


@app.route("/db")
def db():
    #clientDB = MongoClient("mongodb+srv://admin:admin@compratec-lcbic.mongodb.net/test?retryWrites=true")
    return "Test MongoClient!!"



if __name__ == "__main__":
    app.run(debug=True, port=8080)
