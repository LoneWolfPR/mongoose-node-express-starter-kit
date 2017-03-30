import Example from '../models/exampleModel';

export function getAll(req, res) {
  const query = {};
  Example.find(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
}

export function get(req, res) {
  res.json(req.example);
}

export function post(req, res) {
  const example = new Example(req.body);
  example.save();
  res.status(201);
  res.send(example);
}

export function put(req, res) {
  req.example.content = req.body.content;
  req.example.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(req.example);
    }
  });
}

export function patch(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  for (const prop in req.body) {
    req.example[prop] = req.body[prop];
  }
  req.example.save((err) => {
    if (err) {
      req.status(500).send(err);
    } else {
      res.json(req.example);
    }
  })
}

export function del(req, res) {
  req.example.remove((err) => {
    if (err) {
      req.status(500).send(err);
    } else {
      res.status(204).send('Removed');
    }
  })
}
