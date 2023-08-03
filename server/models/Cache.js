const mongoose = require("mongoose");
const { Schema } = mongoose;

const cacheSchema = new Schema(
  {
    name: {
      type: String,
    },
    cacheRecords: [
      {
        type: Schema.Types.ObjectId,
        ref: "CacheRecord",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cache = mongoose.model("Cache", cacheSchema);

module.exports = Cache;
