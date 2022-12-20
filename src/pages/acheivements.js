import React from "react";
import { Button } from "@mui/material";
import Publishedpaper from "./publishedpaper";
import Internship from "./internship";
import {useNavigate} from "react-router-dom";

  
 function Acheivements()
{
    const navigate=useNavigate();

   
    return(
        <div>
          <Button style={{width:"550px"}} variant="contained" color="secondary" onClick={()=>navigate("/internship")}>Internship</Button>  
          <br/><br/>
          <Button style={{width:"550px"}} variant="contained" color="secondary" onClick={()=>navigate("/publishedpaper")}>Published Paper</Button>  

        </div>
    );

}

export default Acheivements;