const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  lastName: String,
  hobbie: String
});

export default mongoose.model('Student', StudentSchema);
