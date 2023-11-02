
import './../App.css';

import turtle from './../assets/turtle.jpg'
import algaeHeader from "./../assets/algaeheader.png"
import recycling from "./../assets/recycling.jpg"
import { Grid } from '@mui/material';
import sus from "./../assets/sustainability.png"

export default function Sustainability() {
    return (

        <div >
            <img src={algaeHeader} width={"100%"} height={"auto"}></img>
            <div style={{ height: "20px" }}></div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Sustainability</h1>
                        <p className="pageText" style={{ textAlign: "left", opacity: "1" }}>
                        Recycalgal is committed to sustainability in every aspect of our work. Our approach promotes a circular economy, where plastics are transformed into biodegradable biomass, and we minimize our ecological footprint in the process. As well as this, our breakdown products are non-toxic and excess microalgae is used for biofuel production We strive to create a world where the disposal of plastics no longer threatens our environment but instead contributes to a healthier and more sustainable planet.                            
                             </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <img width="95%" src={sus}></img>
                </Grid>
            </Grid>
        </div>



    )

}