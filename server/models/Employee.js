const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    leaderStatus: {
      type: Boolean,
    },
    cacheStatus: {
      type: Boolean,
    },
    routes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Route",
      },
    ],
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

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
