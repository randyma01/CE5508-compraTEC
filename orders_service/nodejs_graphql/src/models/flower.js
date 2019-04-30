import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WallyStatsSchema = new Schema({
  name: String,
  price: Number,
  color: String,
  stock: Number
});

export default mongoose.model('Flower', WallyStatsSchema);
