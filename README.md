# Welcome
This is a simple react storefront, with Database (SQL) and full REST API as backend, including Sequelize.
Using Typescript in both frontend and backend.

Frontend:
React - frontend framework
Axios - API calls

Backend:
Node.js
Express.js
Sequelize ORM


## Getting Started
Create a database (I used MySQL) and set up an .env file with the following:
example:
DB_NAME=porkrindemporium
DB_USER=root
DB_PASS=123456
DB_HOST=localhost
DB_PORT=3306

### Setting Up Server

0. Create an SQL db and connect it using the .env above.

1. Uncomment the sync function at the bottom of server/src/database/database.ts
And run it.

2. Uncomment the initialCreate calls on server/src/database/writeToDB.ts and run it to make template items,
You can also just manually create items from the GUI.

You can also load up a backup to get basic example.

### Setting up Frontend (React)

1. Change client/src/variables/myAxios to your server URL

I made some real simple design to go along with it. 
Designers are welcome to make their changes and I will merge it :)


## Running:
1. ```cd server``` -> ```npm run dev``` to run nodemon or ```npm build``` to deploy
2. ```cd client``` -> ```npm start``` to run the frontend.

## License
Free to use