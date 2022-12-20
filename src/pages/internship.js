import React from "react";
import { Typography,Card } from "@mui/material";

  
export default function Internship()
{
    return(
        <div>
            <Typography variant="h3" gutterBottom>
                Internship
            </Typography>
            <Card style={{width:"500px",height:"100px",margin:"50px"}}>
            <Typography>
            Completed Internship in JAVA at Dr.Agarwal’s
            Center For Translational Research.
            </Typography>
            </Card>

    
        </div>
    );

}