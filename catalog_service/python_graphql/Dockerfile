FROM python:3.7


# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

COPY requirements.txt /requirements.txt
RUN pip install -r requirements.txt

EXPOSE 8080

ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"] 