
import './../App.css';

import turtle from './../assets/turtle.jpg'
import algaeHeader from "./../assets/algaeheader.png"
import { Grid } from '@mui/material';
import recycling from "./../assets/trash.png"


export default function Methods() {
    return (

        <div >
            <img src={algaeHeader} width={"100%"} height={"auto"}></img>
            <div style={{ height: "20px" }}></div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Methods</h1>
                        <p className="pageText" style={{ textAlign: "left", opacity: "1" }}>
                        Through cutting-edge genetic engineering techniques, we have empowered microalga to not only thrive but also target and break down polyethylene (PE) plastics. Our team of dedicated scientists and researchers work tirelessly to enhance the natural capabilities of algae, ensuring they can efficiently degrade PE as well as trying to expand the range of types of plastic our GM microalga can break down. By doing so, our GM microalga provide a sustainable alternative to current inefficient and environmentally limited disposal methods such as landfill and recycling, thus reducing the longevity and environmental impact of plastic waste. Our excess microalgae will also be used for biofuel production.                               </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <img width="95%" src={recycling}></img>
                </Grid>
            </Grid>
        </div>



    )

}