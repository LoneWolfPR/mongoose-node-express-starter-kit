import express from 'express';
import bodyParser from 'body-parser';
import env from 'node-env-file';
import mongoose from 'mongoose';
import exampleRoutes from './api/exampleRoutes'; // Replace with real routes

env(__dirname + '/.env');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI,
  {
    db: process.env.DB,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    auth: {
      authSource: process.env.DB_AUTH_DB,
    },
  }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MonogoDB connection error')); // eslint-disable-line no-console

const app = express();
const port = process.env.PORT || 3000;
const exampleRouter = exampleRoutes(); // Replace with real router

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/example', exampleRouter); // Replace with real router

app.get('/', (req, res) => {
  res.send('Server status: operational...');
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`); // eslint-disable-line no-console
});
