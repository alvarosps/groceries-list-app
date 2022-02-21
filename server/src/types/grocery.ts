import { Document } from "mongoose"

export interface IGrocery extends Document {
    name: string
    quantity: number,
    status: boolean
}