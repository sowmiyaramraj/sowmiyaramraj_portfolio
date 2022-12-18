import React from "react";
import Typography from '@mui/material/Typography';
import github from "../images/githubicon.png";
import email from "../images/emaillogo.png";
import insta from "../images/instalogo.jpeg";
import linkedin from "../images/linkedinlogo.png";
import cvlogo from "../images/cvlogo.png";
export default function Contact()
{
    return(
        <div>
          <Typography>Reach Out to me! </Typography>
          
          <a href="https://github.com/sowmiyaramraj" target="_blank" rel="noreferrer">
          <img style={{width:"35px",height:"35px"}} src={github} alt="github" />
        </a>&nbsp;
        <a href="https://github.com/sowmiyaramraj" target="_blank" rel="noreferrer">
          <img style={{width:"35px",height:"35px"}} src={email} alt="github" />
        </a>&nbsp;
        <a href="www.linkedin.com/in/sowmiya-ramraj" target="_blank" rel="noreferrer">
          <img style={{width:"35px",height:"35px"}} src={linkedin} alt="github" />
        </a>&nbsp;
        <a href="https://www.instagram.com/yoon_kids_mom" target="_blank" rel="noreferrer">
          <img style={{width:"35px",height:"35px"}} src={insta} alt="github" />
        </a>&nbsp;
        <br/><br/>
        <a href="https://github.com/sowmiyaramraj/sowmiyaRamraj-Resume" target="_blank" rel="noreferrer">
          <img style={{width:"55px",height:"55px"}} src={cvlogo} alt="github" />
        </a>&nbsp;
       
        </div>
    );

}