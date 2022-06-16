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
    const id= req.body.id_1
    db.query(`INSERT INTO addtask (task,id_1)VALUES(?,?)`,[task,id],(err,result)=>{
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

// app.put(`/getdata`,(req,res)=>{
//     const id= req.body.id
   
//     db.query(`select * from addtask where status = false`,(err,result)=>{
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


app.get(`/completed`,(req,res)=>{

   
    db.query(`select * from addtask where status = true`,(err,result)=>{
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

app.put(`/getdata`,(req,res)=>{

   const id_10 = req.body.id
  
    db.query(`UPDATE addtask set status = false where id = ${id_10} `,(err,result)=>{
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

    const id_11 =req.body.id;
    console.log(id_11)

    const mysql = `UPDATE addtask set importent = false where id = ${id_11} `

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



app.post(`/Add_list`,(req,res)=>{

    const input=req.body.input;
    db.query(`INSERT INTO list (name)VALUES(?)`,[input],(err,result)=>{
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

app.post(`/Add_name`,(req,res)=>{
        const id_1=req.body.x
    const input=req.body.input;
    const sql = `SELECT task FROM addtask inner JOIN list ON list.id_1=addtask.id_1 WHERE addtask.id_1 =${id_1} `

    db.query(sql,(err,result)=>{
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

app.get(`/add_listdata_1`,(req,res)=>{
    const input = req.params.input
   const mysql = `select * from list `
    db.query(mysql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
            console.log(result)
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})

app.listen(9001,()=>{
    console.log("server running port 9001")
})