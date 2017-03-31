# mongoose-node-express-starter-kit
Starter kit for Node.js, mongoose, and Express.

## Requirements
* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)

## Installation and Setup
Create a .env file for development

    cp ./src/.env.example ./src/.env

Edit the new file with the desired settings. Optionally if you want to test your production build locally you'll need to copy that file into the project root for the build files to use.

    cp ./src/.env ./.env

Install all node modules

    npm Install

## Running application
The package includes example routes, models, and controllers that should work if your `.env` file is set up properly. Simply run:

    npm start

Or to run without extra output (only warnings, errors, linting messages, etc.)

    npm start -s

You can now make api calls using a front end application or via an app like Postman or Advanced Rest Client to test your API.

## Building the application
When building the app a new transpiled `server.js` and `api/` folder will be created at the root. Each time you build these will be removed then rebuilt. The built in build script is set up to run the server after the build completes. Simply run:

    npm run build

You can test the api the same way as when running the dev version.

## Testing
There is an example unit test set up that tests on of the functions in the example controller. It uses mocha and sinon to check that that the getAll method works as expected. There is also a test npm script in the package.json. You can run all unit tests by running:

    npm test

Additionally the `npm start` script now includes a script to run a watch on all js files while the server is running.
