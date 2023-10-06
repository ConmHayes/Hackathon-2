Installing required libraries

while in the api folder:
    1. Install nodemon as a dev dependency in your console
    - 'npm i nodemon -D'
    2. Install cors, dotenv, express and pg
    - 'npm i cors dotenv express pg'


Running the server

To run the server you must create a .env file inside the api folder and include your database url and port you wish to use in the format of:
```   
PORT='Port'
DB_URL='Database URL'
```
Where 'Port' is your port number and 'Database URL' is your url from you database (I would recommend Elephant SQL)

Now in your console run the command 'npm run setup-db' and the 'npm run dev' now your server should be set up with your server.

you can now access front end at your localhost//:3000