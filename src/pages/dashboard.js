import React from "react";
import "./pages.css";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import sowmiya from "../images/sowmiya-name-logo.jpeg";
import Contact from "./contact";
import Education from "./education";
import Acheivements from "./acheivements";
import Home from "./home";
import Project from "./project";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Dashboard()
{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div className="body">
             <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{fontFamily:"cursive",fontStyle:"oblique",fontWeight:"bolder"}} label="Home" {...a11yProps(0)} />
          <Tab style={{fontFamily:"cursive",fontStyle:"oblique",fontWeight:"bolder"}} label="Education" {...a11yProps(1)} />
          <Tab style={{fontFamily:"cursive",fontStyle:"oblique",fontWeight:"bolder"}} label="Acheivements" {...a11yProps(2)} />
          <Tab style={{fontFamily:"cursive",fontStyle:"oblique",fontWeight:"bolder"}} label="Project" {...a11yProps(3)} />
          <Tab style={{fontFamily:"cursive",fontStyle:"oblique",fontWeight:"bolder"}} label="Contact" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Education/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Acheivements/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Project/>
      </TabPanel>
      <TabPanel value={value} index={4}>
       <Contact/>
      </TabPanel>
    </Box>
        </div>

    );
           
        

}