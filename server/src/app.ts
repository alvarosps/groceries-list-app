import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import groceriesRoutes from "./routes"

import path from "path"

const app: Express = express()

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "../client/build")));

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(groceriesRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.t9ykw.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose.connect(uri, { })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    })
    .catch(error => {
        throw error
    })
