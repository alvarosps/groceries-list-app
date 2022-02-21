import { Response, Request } from "express"
import { IGrocery } from "./../../types/grocery"
import Grocery from "../../models/grocery"

const getGroceries = async (req: Request, res: Response): Promise<void> => {
    try {
        const groceries: IGrocery[] = await Grocery.find()
        res.status(200).json({
            groceries
        })
    } catch (error) {
        throw error
    }
}

const addGrocery = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IGrocery, "name" | "quantity" | "status">

        const grocery: IGrocery = new Grocery({
            name: body.name,
            quantity: body.quantity,
            status: body.status,
        })

        const newGrocery: IGrocery = await grocery.save()
        const allGroceries: IGrocery[] = await Grocery.find()

        res.status(201).json({
            message: "Grocery added",
            grocery: newGrocery,
            groceries: allGroceries
        })
    } catch (error) {
        throw error
    }
}

const updateGrocery = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req

        const updateGrocery: IGrocery | null = await Grocery.findByIdAndUpdate(
            { _id: id },
            body
        )

        const allGroceries: IGrocery[] = await Grocery.find()

        res.status(200).json({
            message: "Grocery updated",
            grocery: updateGrocery,
            groceries: allGroceries,
        })
    } catch (error) {
        throw error
    }
}

const deleteGrocery = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedGrocery: IGrocery | null = await Grocery.findByIdAndRemove(
            req.params.id
        )

        const allGroceries: IGrocery[] = await Grocery.find()
        res.status(200).json({
            message: "Grocery deleted",
            grocery: deletedGrocery,
            groceries: allGroceries,
        })
    } catch (error) {
        throw error
    }
}

export { getGroceries, addGrocery, updateGrocery, deleteGrocery }