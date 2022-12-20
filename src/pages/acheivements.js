import React from "react";
import { Button } from "@mui/material";
import Publishedpaper from "./publishedpaper";
import Internship from "./internship";

  
export default function Acheivements()
{
    return(
        <div>
          <Button style={{width:"550px"}} variant="contained" color="secondary" onClick={Internship}>Internship</Button>  
          <br/><br/>
          <Button style={{width:"550px"}} variant="contained" color="secondary" onClick={Publishedpaper}>Published Paper</Button>  

        </div>
    );

}