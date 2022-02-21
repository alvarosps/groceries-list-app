import { IGrocery } from "./../types/grocery"
import { model, Schema } from "mongoose"

const grocerySchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

export default model<IGrocery>("Grocery", grocerySchema)