const mongoose = require("mongoose");
const { Schema } = mongoose;

const materialInventorySchema = new Schema(
  {
    ordinanceType: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const MaterialInventory = mongoose.model("MaterialInventory", materialInventorySchema);

module.exports = MaterialInventory;
