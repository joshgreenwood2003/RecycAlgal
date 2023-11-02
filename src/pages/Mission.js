
import './../App.css';

import turtle from './../assets/turtle.jpg'
import world from './../assets/world.png'
import algaeHeader from "./../assets/algaeheader.png"
import { Grid } from '@mui/material';


export default function Mission() {
    return (

        <div >
            <img src={algaeHeader} width={"100%"} height={"auto"}></img>
            <div style={{ height: "20px" }}></div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Our Mission</h1>
                        <p className="pageText" style={{ textAlign: "left", opacity: "1" }}>At Recycalgal, our mission is clear: to harness the power of nature through genetic engineering to combat the global plastic pollution crisis. We are dedicated to pioneering sustainable and innovative solutions to address one of the most pressing environmental challenges of our time.</p><p>
Our mission is not just about degrading plastics; it's about creating a world where plastics no longer pose a threat to the environment. We invite you to join us on this journey to a sustainable future where nature and science unite to tackle one of the most significant challenges of our time. Together, we can make a difference and leave a cleaner, healthier planet for future generations.</p><p>
Together, let's reimagine our relationship with plastics and build a brighter, greener and more sustainable future for all.
 </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <img width="95%" src={world}></img>
                </Grid>
            </Grid>
        </div>



    )

}