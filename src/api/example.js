import express from 'express';

const router = express.Router();

export default () => {
  router.route('/')
    .get((req, res) => {
      res.json({ 'operation': 'GET', 'response': 'Hi there!' });
    })
    .post((req, res) => {
      res.status(201).json({ 'operation': 'POST', 'body': req.body });
    })
    .put((req, res) => {
      res.json({ 'operation': 'PUT', 'body': req.body })
    })
    .patch((req, res) => {
      res.json({ 'operation': 'PATCH', 'body': req.body })
    })
    .delete((req, res) => {
      res.status(204).json({ 'operation': 'DELETE', 'body': req.body })
    })

  return router;
}
