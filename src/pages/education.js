import React from "react";
import msu from "../images/msu.jpeg";
import sarada from "../images/sarada.png";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Education()
{
    return(
        <div>
            <div >
               
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                    <img style={{width:"120px",height:"90px"}} src={msu}/>
                    </Grid>
                    <Grid item xs={6}>
                    <Card sx={{ minWidth: 275 }}>
                    <Typography sx={{ fontSize: 14,textAlign:"center",background:"rgb(245, 180, 245)" }} color="text.secondary" gutterBottom>
        MS University<br/>
        Master of Science in Infromation Technology(2016-2018)
        </Typography>
        <Typography>
            <ul style={{textAlign:"left"}}>
               
                I have studied basic Big Data analytics<br/>
               
               Basic coding in R studio
            </ul>
            
            </Typography>  </Card>
                    </Grid>
                </Grid>
            </div>
            <br/><hr/>
            <div >               
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                    <img style={{width:"100px",height:"120px"}} src={sarada}/>
                    </Grid>
                    <Grid item xs={6}>
                    <Card sx={{ minWidth: 275 }}>
                    <Typography sx={{ fontSize: 14,textAlign:"center",background:"rgb(245, 180, 245)" }} color="text.secondary" gutterBottom>
        Sri Sarada college<br/>
       Bachelore of Science in Computer Science(2013-2016)
        </Typography>
        <Typography>
            <ul style={{textAlign:"left"}}>               
                I have studied basic Big Data analytics<br/>               
               Basic coding in R studio
            </ul>
            
            </Typography>  </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );

}