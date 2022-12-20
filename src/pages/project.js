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
        <Button variant="contained" color="secondary">Visit</Button>  
    </Card >
  </Grid>
  <Grid item xs={4}>
  <Card style={{height:"200px"}} variant="outlined" >
  <div style={{height:"140px"}}>
        <Typography variant="h6" style={{fontWeight:"bolder"}}>Classroom management </Typography>
        <p style={{align:"left"}}>This project allow authorised student to view their class details and their progress  </p>
        </div>
        <img style={{width:"100px",height:"50px"}} src={mern} alt="Mernstack"/>&nbsp;&nbsp;
        <Button variant="contained" color="secondary">Visit</Button>  
    </Card >
  </Grid>
  <Grid item xs={4}>
  <Card style={{height:"200px"}} variant="outlined" >
  <div style={{height:"120px"}}>
    <Typography variant="h6" style={{fontWeight:"bolder"}}>Fresher portfolio website </Typography>
        <p style={{align:"left"}}>The Complete Customizable Fresher Portfolio
         Template which lets you showcase your work and provides each and every detail
         about you
        </p></div>
         <img style={{width:"80px",height:"80px"}} src={frontend} alt="js,html,css"/>&nbsp;&nbsp;
         <Button variant="contained" color="secondary">Visit</Button>  
    </Card >
  </Grid>
  <Grid item xs={4}>
  <Card style={{height:"200px"}} variant="outlined" >
  <div style={{height:"120px"}}>
    <Typography variant="h6" style={{fontWeight:"bolder"}}>Guess a word game </Typography>
        <p style={{align:"left"}}>This project is a simple puzzle game  </p>
        </div>
        <img style={{width:"80px",height:"80px"}} src={frontend} alt="js,html,css"/>&nbsp;&nbsp;
        <Button variant="contained" color="secondary">Visit</Button>  
    </Card >
  </Grid>
  
  </Grid>
        </div>
    );

}