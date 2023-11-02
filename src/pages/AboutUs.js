
import './../App.css';

import turtle from './../assets/turtle.jpg'
import algaeHeader from "./../assets/algaeheader.png"
import { Grid } from '@mui/material';


export default function AboutUs() {
    return (

        <div >
            <img src={algaeHeader} width={"100%"} height={"auto"}></img>
            <div style={{ height: "20px" }}></div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>About Us</h1>
                        <p className="pageText" style={{ textAlign: "left", opacity: "1" }}>Welcome to Recycalgal, where innovation meets environmental stewardship. We are a forward-thinking company dedicated to revolutionizing the fight against plastic pollution through cutting-edge genetic engineering of algae. </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <img width="95%" src={turtle}></img>
                </Grid>
            </Grid>
        </div>



    )

}