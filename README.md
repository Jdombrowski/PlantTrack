This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Starting the API server

Starting the server
`cd /api && nodemon bin/www`

Runs on port 9000
Open [http://localhost:9000/users](http://localhost:9000/users) to view it in the browser, and verify that the api is functioning

## Starting The mysql server and initializing data

Install Mysql Server

Start it
`mysql -u root -p`
and enter whatever password you have enabled. This password will be what you add to the `/database/connection/index.js` to allow the app to have a connection to the DB

From this sql shell, run
`source init.sql` and then `source create_sample_data.sql`
After this step, you should begin seeing items in the users list at the top of the page
