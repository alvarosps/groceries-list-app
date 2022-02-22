import React, { useEffect, useState } from 'react';
import './App.css';
import { getGroceries, addGrocery, updateGrocery, deleteGrocery } from './API';
import AddGrocery from './components/AddGrocery';
import GroceryItem from './components/GroceryItem';


const App: React.FC = () => {
  const [groceries, setGroceries] = useState<IGrocery[]>([])

  useEffect(() => {
    fetchGroceries()
  }, [])

  const fetchGroceries = (): void => {
    getGroceries()
      .then(({ data: { groceries } }: IGrocery[] | any) => setGroceries(groceries))
      .catch((err: Error) => console.log(err))
  }

  const handleSaveGrocery = (e: React.FormEvent, formData: IGrocery): void => {
    e.preventDefault()
    addGrocery(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Grocery not saved")
        }

        setGroceries(data.groceries)
      })
      .catch((err: any) => console.log(err))
  }

  const handleUpdateGrocery = (grocery: IGrocery): void => {
    updateGrocery(grocery)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Grocery not updated")
        }
        setGroceries(data.groceries)
      })
      .catch((err: any) => console.log(err))
  }

  const handleDeleteGrocery = (_id: string): void => {
    deleteGrocery(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Grocery not updated")
        }
        setGroceries(data.groceries)
      })
      .catch((err: any) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>Groceries List</h1>
      <AddGrocery saveGrocery={handleSaveGrocery} />
      {groceries.map((grocery: IGrocery) => (
        <GroceryItem 
          key={grocery._id}
          updateGrocery={handleUpdateGrocery}
          deleteGrocery={handleDeleteGrocery}
          grocery={grocery}
        />
      ))}
    </main>
  )
}

export default App;
