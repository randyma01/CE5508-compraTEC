from mongoengine import connect

def init_db():
    connect('compraTEC', host='mongodb://localhost:27017')
