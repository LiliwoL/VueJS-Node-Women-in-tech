// Import function from Woman Model
import { getWomen, getWomanById, insertWoman, updateWomanById, deleteWomanById } from "../models/womanModel.js";

// Get All Women
export const showWomen = (req, res) => {
    getWomen((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Women
export const showWomanById = (req, res) => {
    getWomanById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Woman
export const createWoman = (req, res) => {
    const data = req.body;
    insertWoman(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Woman
export const updateWoman = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateWomanById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Woman
export const deleteWoman = (req, res) => {
    const id = req.params.id;
    deleteWomanById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}