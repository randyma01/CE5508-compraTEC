from flask import Flask
from flask_graphql import GraphQLView
from pymongo import MongoClient
from database import init_db
from schema import schema

#print("Hello World from Python 3.7.2!!")

app = Flask(__name__)
app.debug = True

app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

@app.route("/test")
def test():
    return "Server Run TEST!!!"


if __name__ == "__main__":
    init_db()
    app.run(port=8080)
