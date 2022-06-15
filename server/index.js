const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require('cors')


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root",
    database:"todo"
})



app.post(`/addtask`,(req,res)=>{

    const task=req.body.task;
    db.query(`INSERT INTO addtask (task)VALUES(?)`,[task],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})

app.get(`/getdata`,(req,res)=>{

   
    db.query(`select * from addtask where status = false`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})

// app.get(`/getdata`,(req,res)=>{

   
//     db.query(`select * from addtask addtask where status = false"`,(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send({message:"sucess",results:result})
//         }
//     })
//     db.connect((err)=>{
//         err? console.log(err): console.log("connected")
//     })
 
// })

app.get(`/addtask_2`,(req,res)=>{

   const mysql = "select * from addtask where status = false and importent = false"
    db.query(mysql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})

app.put(`/addtask_1`,(req,res)=>{

    const id_1 =req.body.id;

    const mysql = `UPDATE addtask set status = true where id = ${id_1} `

    db.query(mysql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})

app.put(`/importent`,(req,res)=>{

    const id_1 =req.body.id;

    const mysql = `UPDATE addtask set importent = true where id = ${id_1} `;

    db.query(mysql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})

app.get(`/importent_data`,(req,res)=>{


    const mysql = `select * from addtask where importent = true `

    db.query(mysql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})


app.put(`/updatefalse`,(req,res)=>{

    const id_1 =req.body.id;

    const mysql = `UPDATE addtask set importent = false where id = ${id_1} `

    db.query(mysql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})


app.put(`/updateimportent`,(req,res)=>{

    const id_1 =req.body.id;

    const mysql = `UPDATE addtask set importent = false where id = ${id_1} `

    db.query(mysql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})

app.delete(`/delete/:id`,(req,res)=>{

    const id_1 =req.params.id;
    console.log(req.body.id)

    const mysql = `DELETE FROM addtask where id = ${id_1} `

    db.query(mysql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})


app.listen(9001,()=>{
    console.log("server running port 9001")
})