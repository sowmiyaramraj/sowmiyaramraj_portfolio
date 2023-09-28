import { Typography,Grid,Card,Button  } from "@mui/material";
import React from "react";
import frontend from "../images/js,html,css.png";
import mern from "../images/mern.png";

export default function Project()
{
    return(
        <div>
           <Typography variant="h2" guttorBottom>Something I Built..</Typography>
           <Grid container spacing={2}>
  <Grid item xs={4}>
    <Card style={{height:"200px"}} variant="outlined" >
        <div style={{height:"140px"}}>
        <Typography variant="h6" style={{fontWeight:"bolder"}}>Stackoverflow Clone</Typography>
        <p style={{align:"left"}}>This project allow authorised user to ask question, view doubt, answer,etc </p>
        </div>

        <img style={{width:"100px",height:"50px"}} src={mern} alt="Mernstack"/>&nbsp;&nbsp;
        <a href="https://chimerical-speculoos-5a9c1c.netlify.app/" target="_blank" rel="noreferrer">
        <Button variant="contained" color="secondary">Visit</Button>  
        </a>
        </Card >
  </Grid>
  <Grid item xs={4}>
  <Card style={{height:"200px"}} variant="outlined" >
  <div style={{height:"140px"}}>
        <Typography variant="h6" style={{fontWeight:"bolder"}}>Classroom management </Typography>
        <p style={{align:"left"}}>This project allow authorised student to view their class details and their progress  </p>
        </div>
        <img style={{width:"100px",height:"50px"}} src={mern} alt="Mernstack"/>&nbsp;&nbsp;
        <a href="https://stately-zuccutto-52d435.netlify.app/" target="_blank" rel="noreferrer">
        <Button variant="contained" color="secondary">Visit</Button>  
        </a>
        </Card >
  </Grid>
  <Grid item xs={4}>
  <Card style={{height:"200px"}} variant="outlined" >
  <div style={{height:"120px"}}>
    <Typography variant="h6" style={{fontWeight:"bolder"}}>E-Commerce </Typography>
        <p style={{align:"left"}}>This is a E-commerce website Developed using Mernstack
        </p></div>
         <img style={{width:"80px",height:"80px"}} src={frontend} alt="js,html,css"/>&nbsp;&nbsp;
         <a href="https://gregarious-daffodil-1b69de.netlify.app/" target="_blank" rel="noreferrer">
        <Button variant="contained" color="secondary">Visit</Button>  
        </a>
        </Card >
  </Grid>
  <Grid item xs={4}>
  <Card style={{height:"200px"}} variant="outlined" >
  <div style={{height:"120px"}}>
    <Typography variant="h6" style={{fontWeight:"bolder"}}>Food order app </Typography>
        <p style={{align:"left"}}>This is a simple food order app built using Mernstack  </p>
        </div>
        <img style={{width:"80px",height:"80px"}} src={frontend} alt="js,html,css"/>&nbsp;&nbsp;

        <a href="https://monumental-meringue-5ff4d9.netlify.app/home" target="_blank" rel="noreferrer">
        <Button variant="contained" color="secondary">Visit</Button>  
        </a>


    </Card >
  </Grid>
  
  </Grid>
        </div>
    );

}
