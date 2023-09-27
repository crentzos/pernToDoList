const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); // allows us to access the req.body


//ROUTES//

//get all Todos

//get a todo

//create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description }  = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1)",
        [description]
        );

        res.json(newTodo);
    } catch (err) {
        console.error(er.message);
    }
});



//update a todo

//delet a todo



app.listen(5000, () => {
    console.log("Server is starting on port 5000");
});