const mongoose = require("mongoose");
const { Schema } = mongoose;

const AmpSheetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    explosivesType: {
        type: String
    },
    shotsUsed: {
        type: Number
    },
    trigger: {
        type: String
    },
    avalancheType: {
        type: String
    },
    depth: {
        type: Number
    },
    size: {
        type: Number
    },
    destructivePotential: {
        type: Number
    }
  },
  {
    timestamps: true,
  }
);

const PathInventory = mongoose.model("PathInventory", pathSchema);

module.exports = PathInventory;
