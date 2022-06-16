
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Todo_task from './Todo_task';


const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Sidebar() {

  
        const[input,setInput]=useState("")
        const[list,setList]=useState([])
        const[list_data,setLits_data]=useState([])
        const [name,setname]=useState("")
        const [crm,setcrm]=useState(false);

        console.log("listt10",list_data)
        console.log(list)

        console.log("all",list_data)

    const add_listdata = ()=>{
      Axios.get(`http://localhost:9001/add_listdata_1`,{
    
  }).then((response)=>{
      console.log("sucess_1", response.data.results)
      // console.log("status",response.data.status)
      // setStatus([...response.data.results])
      // setLits_data(response.data.results)
      
  })
     
    }

useEffect(()=>{

  Axios.get(`http://localhost:9001/add_listdata_1`,{
      
  }).then((response)=>{
      console.log("success10",response.data.results)
      setLits_data(response.data.results)
      
 
     



  })
  add_listdata()

},[])

        const add_list = (input) =>{

    Axios.post(`http://localhost:9001/Add_list`,{
        input:input
    }).then((response)=>{
        console.log("success")
        setList(response.data.results)
      
    })
            console.log(input)
        }

const add_new =(x)=>{
console.log("ggg",x)
  Axios.post(`http://localhost:9001/Add_name`,{
    x:x
}).then((response)=>{
    console.log("success")
    console.log("jjjjjja",response.data.results)
    setcrm(response.data.results)
  
})
  setname(x)

  
}


  return (
    <Box sx={{ display: 'flex' }}>
    
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h4" noWrap component="div">
         Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
      
      {
                  list_data.map((x)=>{
                    return(
                      <div>
                        
                        <ListItem >
              <ListItemButton key={x} onClick={()=>add_new(x.id_1)}   >
                <ListItemIcon>
                <MenuIcon/>  {x.name}
                {/* {x.id_1} */}
                
                
                </ListItemIcon>
                <ListItemText  />
                
              </ListItemButton>
              </ListItem>


                        </div>
                    )
                  })
              }
      <TextField
          id="outlined-textarea"
          label="Add new list"
          placeholder="Add new list"
          multiline
          size="small"
         
          onChange={(event)=>{setInput(event.target.value)}}
        />
        <Button variant='contained' onClick={()=>add_list(input)}color="success">Add</Button>
           {/* <TextField sx={{mt:75}}   type = "text" /> */}
        <Toolbar />
       
       
        
     
      </Drawer>
    
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        
        <Toolbar />
         {/* {im?<Todo_task/>:""} */}
          {"dd"?<Todo_task name={crm}/>:""}
      </Box>
    </Box>
  );
}
