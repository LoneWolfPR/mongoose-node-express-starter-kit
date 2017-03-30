import mongoose from 'mongoose';

const exampleSchema = mongoose.Schema({
  content: String,
});

export default mongoose.model('example', exampleSchema);
