const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({

    user:"root",
    host:"localhost",
    password:"root",
    database:"checkdata"
})

db.connect((err)=>{
    err? console.log(err): console.log("connected")
})

app.post(`/dataget`, (req, res) => {
    const name = req.body.name
    console.log(name);
    const sql = `call dataget("${name}")`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send({ message: "success", results: result[0] })
            console.log("output", result[0]);
        }
    })
})



app.listen(5001,()=>{
    console.log("server running sucess")
})