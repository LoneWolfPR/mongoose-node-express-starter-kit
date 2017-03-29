import express from 'express';
import bodyParser from 'body-parser';
import exampleRoutes from './api/example'; // Replace with real routes

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
