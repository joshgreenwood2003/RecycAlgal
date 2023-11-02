
import './../App.css';

import turtle from './../assets/turtle.jpg'
import algaeHeader from "./../assets/algaeheader.png"
import { Grid } from '@mui/material';

import joelle from "./../assets/joelle.jpeg"
export default function Team() {
    return (

        <div >
            <img src={algaeHeader} width={"100%"} height={"auto"}></img>
            <div style={{ height: "20px" }}></div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Meet The Team</h1>
                        <p className="pageText" style={{ textAlign: "left", opacity: "1" }}>
                        At Recycalgal, we are fueled by a shared passion for protecting our planet from the harmful effects of plastic waste. Plastic pollution has become a global crisis, endangering ecosystems, wildlife, and even human health. We believe that it's our collective responsibility to address this issue with ingenuity and sustainable solutions.                            
                             </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <img width="95%" src={joelle}></img>
                </Grid>
            </Grid>
        </div>



    )

}