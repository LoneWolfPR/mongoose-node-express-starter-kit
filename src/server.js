import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server status: operational...');
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`); // eslint-disable-line no-console
});