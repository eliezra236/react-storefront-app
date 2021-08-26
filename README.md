# Welcome
This is a react storefront application


## Getting Started
Create a database (I used MySQL) and set up an .env file with the following:
example:
DB_NAME=porkrindemporium
DB_USER=root
DB_PASS=123456
DB_HOST=localhost
DB_PORT=3306

### Setting Up Server

1. Uncomment the sync function at the bottom of server/src/database/database.ts
And run it.

2. Uncomment the initialCreate calls on server/src/database/writeToDB.ts and run it.

### Setting up Frontend (React)

1. Change client/src/variables/myAxios to your server URL


