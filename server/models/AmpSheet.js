const mongoose = require("mongoose");
const { Schema } = mongoose;

const ampSheetSchema = new Schema(
    {
        materialInventory: [
            {
                type: Schema.Types.ObjectId,
                ref: "MaterialInventory"
            },
        ],
        routes: [
            {
                type: Schema.Types.ObjectId,
                ref: "Route"
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

const AmpSheet = mongoose.model("AmpSheet", ampSheetSchema);

module.exports = AmpSheet;
