const mongoose = require("mongoose");
const { Schema } = mongoose;

const cacheRecordSchema = new Schema(
  {
    employeeId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
    reason: {
      type: Text,
    },
    materialInventoryIn: [
      {
        type: Schema.Types.ObjectId,
        ref: "MaterialInventory",
      },
    ],
    materialInventoryOut: [
      {
        type: Schema.Types.ObjectId,
        ref: "MaterialInventory",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CacheRecord = mongoose.model("CacheRecord", cacheRecordSchema);

module.exports = CacheRecord;
