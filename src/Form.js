import Axios from "axios"
import React, { useState } from 'react'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Form() {

    const[name,setName]=useState("")
    const[datas,setData]=useState([])

    console.log(name)

    const check_db = (e)=>{
        e.preventDefault();
        
        Axios.post("http://localhost:5001/dataget",{
            name:name
        }).then((response)=>{
          console.log("sucess")
          setData(response.data.results)
          
        })
      }


  return (
    <div>
        <TextField sx={{mt:1}} placeholder="search by name" type="text" onChange={(event)=>{setName(event.target.value)}}/>

        <Button sx={{mt:1}} variant="contained" onClick={check_db}>Show</Button>

        {<Box sx={{ flexGrow: 1,mt:4 , ml:1,mr:1,mb:1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {datas.map((val) => (
          <Grid item xs={2} sm={6} md={6} >
            <Item sx={{background:"lightyellow"}}>
            <h1>name: {val.name} </h1>
            <h4> Mobile:{val.Mobile}</h4>
            <h4>id:{val.id}</h4>
            <h4>Email:{val.Email}</h4>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>}

    </div>
  )
}

export default Form