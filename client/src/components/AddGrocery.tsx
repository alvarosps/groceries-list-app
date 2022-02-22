import React, { useState } from "react"

type Props = {
    saveGrocery: (e: React.FormEvent, formData: IGrocery | any) => void
}

const AddGrocery: React.FC<Props> = ({ saveGrocery }) => {
    const [formData, setFormData] = useState<IGrocery | {}>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className="Form" onSubmit={e => saveGrocery(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleForm} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input onChange={handleForm} type="number" id="quantity" />
                </div>
            </div>
            <button disabled={formData === undefined}>Add Grocery</button>
        </form>
    )
}

export default AddGrocery