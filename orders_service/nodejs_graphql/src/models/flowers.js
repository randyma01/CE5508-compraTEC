const mongoose = require('mongoose'); //cambiar es6

const Schema = mongoose.Schema;

const WallyStatsSchema = new Schema({
  name: String,
  price: Number,
  color: String,
  stock: Number
});

export default mongoose.model('Flower', WallyStatsSchema);
