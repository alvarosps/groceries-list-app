import { Router } from "express"
import { getGroceries, addGrocery, updateGrocery, deleteGrocery } from "../controllers/groceries"

const router: Router = Router()

router.get("/groceries", getGroceries)

router.post("/add-grocery", addGrocery)

router.put("/edit-grocery/:id", updateGrocery)

router.delete("/delete-grocery/:id", deleteGrocery)

export default router