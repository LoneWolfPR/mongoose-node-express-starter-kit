import sinon from 'sinon';
import * as controller from './exampleController';
import Example from '../models/exampleModel';

describe('exampleController', () => {
  beforeEach(() => {
    sinon.stub(Example, 'find');
  });

  afterEach(() => {
    Example.find.restore();
  });

  it('should get all documents from the Example collection', () => {
    const a = { content: 'abcdefghi'};
    const b = { content: '123456789'};
    const expectedModels = [a, b];
    Example.find.yields(null, expectedModels);
    const req = { params: {} };
    const res = { json: sinon.stub() };

    controller.getAll(req, res);

    sinon.assert.calledWith(res.json, expectedModels);
  })
});
