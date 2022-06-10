import Axios from "axios"
import React from 'react';
import {useState} from "react"
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
    const[high,setHigh]= useState([])
    // const[name,setName]=useState("")
    // const[productid,setProductid]=useState("")
    // const[amount,setAmount]=useState("")
    // const[date,setDate]=useState("")
    const[inputData,setInputData]=useState([])
    const [value, setValue] = useState(new Date());
    const [vv,setvv]=useState('')

    

    console.log(high)

    const addemp=(e)=>{
        e.preventDefault()
        Axios.get('http://localhost:4001/getbyerlevel',{
            
        }).then((response)=>{
            console.log("sucess")
            setInputData(response.data.results)
        })
    }


    const check_db = (e)=>{
      e.preventDefault();
      
      Axios.post("http://localhost:4001/byer",{
        high:high
      }).then((response)=>{
        console.log("sucess")
        setHigh(response.data.results)
        
      })
    }
  return (
    <div>
            <form>
                <input type = 'text' placeholder='Name' onChange={(event)=>{setHigh(event.target.value )}}/><br/>
                {/* <input type = "text" placeholder='Name' onChange={(event)=>{setName(event.target.value )}}/><br/>
                <input type = "number" placeholder='Product id' onChange={(event)=>{setProductid(event.target.value )}}/><br/>
                <input type = "number" placeholder='amount' onChange={(event)=>{setAmount(event.target.value )}}/><br/>
                <input type = "date" placeholder='purchase date' onChange={(event)=>{setDate(event.target.value )}}/><br/> */}
                
            
            </form>
           <div>
           <Button variant="contained" color="error" sx={{mt:2}}onClick={addemp}>Show Details</Button>
           <Button variant="contained" color="error" onClick={check_db}>input</Button>
           {
    <Box sx={{ flexGrow: 1,mt:4 , ml:1,mr:1,mb:1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {inputData.map((val) => (
          <Grid item xs={2} sm={6} md={6} >
            <Item sx={{background:"lightblue"}}>
            <h1>id: {val.byer_id} </h1>
            <h4> name:{val.byer_name}</h4>
            <h4>amount:{val.amount}</h4>
            <h4>purchase_date:{val.purchase_date}</h4>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>}

   
    {/* {
    <Box sx={{ flexGrow: 1,mt:4 , ml:1,mr:1,mb:1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { high.map((val) => (
          <Grid item xs={2} sm={6} md={6} >
            <Item sx={{background:"lightblue"}}>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>}
             */}
            
               </div> 

    </div>
  )
}

export default Form
