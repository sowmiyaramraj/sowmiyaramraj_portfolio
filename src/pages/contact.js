import React from "react";
import Typography from '@mui/material/Typography';
import github from "../images/githubicon.png";
import email from "../images/emaillogo.png";
import insta from "../images/instalogo.jpeg";
import linkedin from "../images/linkedinlogo.png";
import cvlogo from "../images/cvlogo.png";
import sowimg from "../images/sowmiyaimg.jpg";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Contact()
{
    return(
        <div>
           <Box sx={{ flexGrow: 1 }}>
           <Typography variant="h3" gutterBottom>Reach Out to me! </Typography>
           <Typography style={{color:"grey"}} variant="h6" gutterBottom>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</Typography>
      <Grid  style={{width:"maxWidth",height:"250px"}}>
        <Grid item xs={6}>
            <img style={{width:"250px",height:"250px"}} src={sowimg} alt="profile"/>
        </Grid>
        <Grid item xs={6}>
          <a href="https://github.com/sowmiyaramraj" target="_blank" rel="noreferrer">
          <img style={{width:"35px",height:"35px"}} src={github} alt="github" />
        </a>&nbsp;&nbsp;
        <a href="https://github.com/sowmiyaramraj" target="_blank" rel="noreferrer">
          <img style={{width:"35px",height:"35px"}} src={email} alt="github" />
        </a>&nbsp;&nbsp;
        <a href="www.linkedin.com/in/sowmiya-ramraj" target="_blank" rel="noreferrer">
          <img style={{width:"35px",height:"35px"}} src={linkedin} alt="github" />
        </a>&nbsp;&nbsp;
        <a href="https://www.instagram.com/yoon_kids_mom" target="_blank" rel="noreferrer">
          <img style={{width:"35px",height:"35px"}} src={insta} alt="github" />
        </a>&nbsp;&nbsp;
        <br/><br/>
        <a href="https://github.com/sowmiyaramraj/sowmiyaRamraj-Resume" target="_blank" rel="noreferrer">
          <img style={{width:"55px",height:"55px"}} src={cvlogo} alt="github" />
        </a>&nbsp;&nbsp;

        <Typography style={{fontWeight:"bolder"}} variant="h5" gutterBottom>Address</Typography>
        <p style={{color:"grey",fontFamily:"cursive",fontStyle:"oblique",fontWeight:"bolder"}}>No.5, Alagar salai<br/>Old Pallavarm,Chennai-600117</p>
        <Typography style={{fontWeight:"bolder"}} variant="h5" gutterBottom>Phone number</Typography>
        <p style={{color:"grey",fontFamily:"cursive",fontStyle:"oblique",fontWeight:"bolder"}}>8122802274</p>
        </Grid>
        </Grid>
    </Box>
         
        </div>
    );

}