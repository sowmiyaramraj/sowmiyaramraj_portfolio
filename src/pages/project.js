import { Typography,Grid,Card  } from "@mui/material";
import React from "react";

export default function Project()
{
    return(
        <div>
           <Typography variant="h2" guttorBottom>Something I Built</Typography>
           <Grid container spacing={2}>
  <Grid item xs={4}>
    <Card variant="outlined" >
        <Typography variant="h6" style={{fontWeight:"bolder"}}>Stackoverflow Clone</Typography>
        <p style={{align:"left"}}>This project allow authorised user to ask question, view doubt, answer,etc </p>
    </Card >
  </Grid>
  <Grid item xs={4}>
  <Card variant="outlined" >
        <Typography variant="h6" style={{fontWeight:"bolder"}}>Classroom management </Typography>
        <p style={{align:"left"}}>This project allow authorised student to view their class details and their progress  </p>
    </Card >
  </Grid>
  <Grid item xs={4}>
  <Card variant="outlined" >
        <Typography variant="h6" style={{fontWeight:"bolder"}}>Freshers portfolio website </Typography>
        <p style={{align:"left"}}>The complete portfolio website hosted using github pages (gh-pages).
         Visit the website here :  </p>
    </Card >
  </Grid>
  <Grid item xs={4}>
  <Card variant="outlined" >
        <Typography variant="h6" style={{fontWeight:"bolder"}}>Guess a word game </Typography>
        <p style={{align:"left"}}>This project is a simple puzzle game  </p>
    </Card >
  </Grid>
  
  </Grid>
        </div>
    );

}