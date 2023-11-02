
import './../App.css';

import turtle from './../assets/turtle.jpg'
import algaeHeader from "./../assets/algaeheader.png"
import solution from "./../assets/solutionpic.jpg"
import { Grid } from '@mui/material';


export default function Solution() {
    return (

        <div >
            <img src={algaeHeader} width={"100%"} height={"auto"}></img>
            <div style={{ height: "20px" }}></div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Our Solution</h1>
                        <p className="pageText" style={{ textAlign: "left", opacity: "1" }}>
                        Plastic waste poses a significant threat to our planet and its ecosystems, and we believe that nature itself holds the key to combating this issue. Algae, nature's microscopic marvels, have the unique ability to convert sunlight and carbon dioxide into energy and biomass efficiently. We leverage this remarkable potential to develop groundbreaking solutions that tackle plastic pollution head-on.                            </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <img width="95%" src={solution}></img>
                </Grid>
            </Grid>
        </div>



    )

}