const mongoose = require("mongoose");
const { Schema } = mongoose;

const routeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        employees: [
            {
                type: Schema.Types.ObjectId,
                ref: "Employee"
            },
        ],
        paths: [
            {
                type: Schema.Types.ObjectId,
                ref: "Path"
            },
        ],
        materialInventory: [
            {
                type: Schema.Types.ObjectId,
                ref: "MaterialInventory"
            },
        ],
        used: {
            type: Number
        },
        returned: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

const RouteInventory = mongoose.model("RouteInventory", routeSchema);

module.exports = RouteInventory;
