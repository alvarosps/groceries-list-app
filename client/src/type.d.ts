interface IGrocery {
    _id: string
    name: string
    quantity: number
    status: boolean
    createdAt?: string
    updatedAt?: string
}

interface GroceryProps {
    grocery: IGrocery
}

type ApiDataType = {
    message: string
    status: string
    groceries: IGrocery[]
    grocery?: IGrocery
}