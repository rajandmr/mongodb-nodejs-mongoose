##### Usage

This code performs the basic CRUD operation on MongoDB. In order to run, clone the repo, navigate into root directory and run

```
npm install
```

This will install all the required dependencies. Now, create a file .env at the root level that is as same level as _server.js_ and initialize
2 variables.

DB = "Your connection String here"

PORT = "Your desired port, default is 8080"

Now run

```
node server.js
```

This will start the server and log a message if connection to DB is succesful. You can test the endpoints via Postman.
