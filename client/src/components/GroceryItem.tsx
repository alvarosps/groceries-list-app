import React from "react"

type Props = GroceryProps & {
    updateGrocery: (grocery: IGrocery) => void
    deleteGrocery: (_id: string) => void
}

const GroceryItem: React.FC<Props> = ({ grocery, updateGrocery, deleteGrocery }) => {
    const checkGrocery: string = grocery.status ? 'line-through' : ''

    return (
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkGrocery}>{grocery.name}</h1>
                <span className={checkGrocery}>Quantity: {grocery.quantity}</span>
            </div>
            <div className="Card--button">
                <button
                    onClick={() => updateGrocery(grocery)}
                    className={grocery.status ? 'hide-button' : "Card-button__done"}
                >
                    Complete
                </button>
                <button
                    onClick={() => deleteGrocery(grocery._id)}
                    className="Card-button__delete"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default GroceryItem