// import express
import express from "express";

// import function from controller
import { showWomen, showWomanById, createWoman, updateWoman, deleteWoman } from "../controllers/womanController.js";

// init express router
const router = express.Router();

// Get All Woman
router.get('/women', showWomen);

// Get Single Woman
router.get('/women/:id', showWomanById);

// Create New Woman
router.post('/women', createWoman);

// Update Woman
router.put('/women/:id', updateWoman);

// Delete Woman
router.delete('/women/:id', deleteWoman);

// export default router
export default router;