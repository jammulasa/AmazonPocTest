const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
   owner:{type: Schema.Types.ObjectId, ref:'user'},
  totalPrice: { type: number, default: 0},
  products:[{
    product:{type: Schema.Types.ObjectId, ref:'product'},
     quantity: { type: number, default: 1}
  }]
  
});

module.exports = mongoose.model('Order', OrderSchema);
