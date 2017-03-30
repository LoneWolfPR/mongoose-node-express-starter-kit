import express from 'express';
import * as exampleController from './controllers/exampleController';
import Example from './models/exampleModel';

const router = express.Router();

export default () => {
  router.route('/')
    .get(exampleController.getAll)
    .post(exampleController.post);

  router.use('/:id', (req, res, next) => {
    Example.findById(req.params.id, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result) {
        req.example = result;
        next();
      } else {
        res.status(404).send('No result found');
      }
    })
  });

  router.route('/:id')
    .get(exampleController.get)
    .put(exampleController.put)
    .patch(exampleController.patch)
    .delete(exampleController.del);

  return router;
}
