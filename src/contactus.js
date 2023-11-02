import { List } from "@mui/material";
import {ListItem} from "@mui/material";
import {Typography} from "@mui/material";
import React from "react";
import {ListItemIcon} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import {ListItemText} from "@mui/material";
import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function ContactUs(){

    return (
        <div style={{ width:"100%",textAlign:"left"}}>
        <p style = {{paddingLeft:"20px",fontSize:"20px"}}>Contact us</p>

            <List >
              <ListItem>
                <ListItemIcon>
                  <LocalPhoneIcon style = {{"color":"black"}}/>
                </ListItemIcon>
                <ListItemText   primary = "+44 7759512105">
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon style = {{"color":"black"}}/>
                </ListItemIcon>
                <ListItemText   primary = "recycalgal@gmail.com">
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon style = {{"color":"black"}}/>
                </ListItemIcon>
                <ListItemText   primary = "The University of Sheffield Western Bank Sheffield S10 2TN">
                </ListItemText>
              </ListItem>
          
            </List>
        </div>

    )

}
export default ContactUs;