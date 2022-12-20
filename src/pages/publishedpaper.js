import React from "react";
import { Typography,Card } from "@mui/material";

export default function Publishedpaper()
{
    return(
        <div>
             <Card style={{width:"500px",height:"100px"}}>
            <Typography style={{fontSize:"16px",align:"left"}}>
                Published a research paper entitled
                <span style={{fontSize:"18px"}}>RISK FACTOR OF CANCER DIABETICS AND HEART DISEASE ON
                 NAIVE BAYES ALGORITHM ON WEB BASED APPLICATION in IJRP,
                 </span> Volume  4, Issue  1,  May  2018 
            </Typography>
            </Card>
        </div>
    );
}