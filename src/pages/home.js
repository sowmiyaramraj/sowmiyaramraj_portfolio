import { Typography } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';
import gif1 from "../images/gif1.jpeg";
import github from "../images/githubicon.png";
import email from "../images/emaillogo.png";
import insta from "../images/instalogo.jpeg";
import linkedin from "../images/linkedinlogo.png";
import cvlogo from "../images/cvlogo.png";
import field1 from "../images/field1.png";
import field2 from "../images/field2.png";
import node from "../images/node,express.png";
import field8 from "../images/field8.png";
import field5 from "../images/field5.png";
import field6 from "../images/field6.png";
import field7 from "../images/field7.png";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

export default function Home()
{
    return(
        <div>           
            <div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography style={{fontWeight:"bold",fontFamily:"sans-serif"}} variant="h3" guttorButtom>Sowmiya Ramraj</Typography>
            <Typography style={{fontWeight:"bolder",color:"grey",textAlign:"left"}} variant="h5" guttorButtom >A passionate individual
             who always thrive to work on end to end products
              which develop sustainable and scalable social 
              and technical systems to create impact.</Typography><br/>
              <a href="https://github.com/sowmiyaramraj" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={github} alt="github" />
        </a>&nbsp;&nbsp;
        <a href="https://github.com/sowmiyaramraj" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={email} alt="github" />
        </a>&nbsp;&nbsp;
        <a href="www.linkedin.com/in/sowmiya-ramraj" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={linkedin} alt="github" />
        </a>&nbsp;&nbsp;
        <a href="https://www.instagram.com/yoon_kids_mom" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={insta} alt="github" />
        </a>&nbsp;&nbsp;
        <br/><br/>
        <a href="https://github.com/sowmiyaramraj/sowmiyaRamraj-Resume" target="_blank" rel="noreferrer">
          <img style={{width:"55px",height:"55px"}} src={cvlogo} alt="github" />
        </a>&nbsp;&nbsp;
            </Grid>
            <Grid item xs={6}>
            <img style={{width:"300px",height:"350px"}} src={gif1}/>
            </Grid>
            </Grid>
            </Box>
            </div>
            <br/>
            <br/>
            <div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <img style={{width:"300px",height:"350px"}} src={gif1}/>
            </Grid>
            <Grid item xs={6}>
            <Typography style={{fontWeight:"bolder"}} variant="h2" guttorButtom>What I do</Typography>
            <Typography style={{fontWeight:"bolder",color:"grey",textAlign:"left"}} variant="h5" guttorButtom >A passionate individual
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</Typography><br/>
              <a href="https://github.com/sowmiyaramraj" target="_blank" rel="noreferrer">
          <img style={{width:"75px",height:"45px"}} src={field1} alt="github" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/sowmiyaramraj" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={field2} alt="github" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="www.linkedin.com/in/sowmiya-ramraj" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={node} alt="github" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.instagram.com/yoon_kids_mom" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={field8} alt="github" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.instagram.com/yoon_kids_mom" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={field5} alt="github" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.instagram.com/yoon_kids_mom" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={field6} alt="github" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.instagram.com/yoon_kids_mom" target="_blank" rel="noreferrer">
          <img style={{width:"45px",height:"45px"}} src={field7} alt="github" />
        </a>&nbsp;&nbsp;&nbsp;
        <br/><br/>
        <a href="https://github.com/sowmiyaramraj/sowmiyaRamraj-Resume" target="_blank" rel="noreferrer">
          <img style={{width:"55px",height:"55px"}} src={cvlogo} alt="github" />
        </a>&nbsp;&nbsp;&nbsp;
            </Grid>
            </Grid>
            </Box>
            </div>
            <div>
              <Typography style={{fontWeight:"bolder",textAlign:"left"}} variant="h5" gutterBottom>Proficiency</Typography>
            <Typography style={{color:"grey",textAlign:"left"}} variant="h6" gutterBottom >Frontend design</Typography>
            <Box sx={{ flexGrow: 1 }}>     
      <BorderLinearProgress variant="determinate" value={80} />
    </Box> 
    <Typography style={{color:"grey",textAlign:"left"}} variant="h6" gutterBottom >
    Backend design
    </Typography>
            
              <Box sx={{ flexGrow: 1 }}>     
      <BorderLinearProgress variant="determinate" value={60} />
    </Box> 
    <Typography style={{color:"grey",textAlign:"left"}} variant="h6" gutterBottom >
Programming</Typography>
              <Box sx={{ flexGrow: 1 }}>     
      <BorderLinearProgress variant="determinate" value={70} />
    </Box> 
            </div>
        </div>
    );

}