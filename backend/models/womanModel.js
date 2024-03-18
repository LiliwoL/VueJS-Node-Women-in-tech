// import connection
import db from "../config/database.js";

// Get All Women
export const getWomen = (result) => {
    db.query("SELECT * FROM women", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Woman
export const getWomanById = (id, result) => {
    db.query("SELECT * FROM women WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert Woman to Database
export const insertWoman = (data, result) => {
    db.query("INSERT INTO women SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Woman to Database
export const updateWomanById = (data, id, result) => {
    db.query("UPDATE women SET name = ?, details = ? WHERE id = ?", [data.name, data.details, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete Woman to Database
export const deleteWomanById = (id, result) => {
    db.query("DELETE FROM women WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}