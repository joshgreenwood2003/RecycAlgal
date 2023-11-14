
import './../App.css';

import turtle from './../assets/turtle.jpg'
import algaeHeader from "./../assets/algaeheader.png"
import { Grid } from '@mui/material';

import joelle from "./../assets/joelle.png"
import issy from "./../assets/issy.png"
import ethan from "./../assets/ethan.png"
import shannen from "./../assets/shannen.png"
import wynn from "./../assets/wynn.png"
import { useEffect } from 'react';
export default function Team() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (

        <div >
            <img src={algaeHeader} width={"100%"} height={"auto"}></img>
            <div style={{ height: "20px" }}></div>
            <Grid container spacing={2}>


                <Grid item xs={12}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Meet The Team</h1>
                        <p className="pageText" style={{ fontSize: "calc(0.6vw + 20px)" ,textAlign: "left", opacity: "1" }}>
                        At Recycalgal, we are fueled by a shared passion for protecting our planet from the harmful effects of plastic waste. Plastic pollution has become a global crisis, endangering ecosystems, wildlife, and even human health. We believe that it's our collective responsibility to address this issue with ingenuity and sustainable solutions.                            
                             </p>
                    </div>

                </Grid>




                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Isabella Rennison</h1>
                    <h3 style={{ opacity: "1" }}>Chief Executive Officer (CEO) (she/her)</h3>
                        <p className="pageText" style={{ fontSize: "calc(0.55vw + 15px)" , textAlign: "left", opacity: "1" }}>
                        She/Her
Chief Executive Officer (CEO)
Our CEO has a Bsc in Biological Sciences from Durham University and an MSc in Biotechnology with Business Management at the University of Warwick. With previous experience in spin-out companies, Karus Therapeutics and Zoetis, Isabella brings a lot of knowledge and expertise to our team. 
          
                             </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                <img width="95%" style={{position:"relative",top:"50%",transform:"translateY(-50%)",paddingTop:"auto",paddingBottom:"auto"}} src={issy}></img>
                </Grid>




                <Grid item xs={4}>
                <img width="95%" style={{position:"relative",top:"50%",transform:"translateY(-50%)",paddingTop:"auto",paddingBottom:"auto"}} src={wynn}></img>
                </Grid>

                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Wynn Jenkins</h1>
                    <h3 style={{ opacity: "1" }}>Chief Operations Officer (COO) (he/she)</h3>
                        <p className="pageText" style={{  fontSize: "calc(0.55vw + 15px)" ,textAlign: "left", opacity: "1" }}>
                        Our COO has a Bachelor's in Law from LSE, which she followed up strongly with a Masters in Management from Harvard. From there, having directed both Human Resources and Compliance at Lifeasible in the last decade, she has grown to be a fiercely competent organiser. Her acquired familiarity with algae through her years with our partner Lifeasible, as well as close ties with many of the executives at Lifeasible makes her the bridge between the two companies, as well as already intimately well trained for the operational side of algal research and industrial scaling. 
                             </p>
                    </div>

                </Grid>




                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Joelle Harrison</h1>
                    <h3 style={{ opacity: "1" }}>Chief Scientific Officer (CSO) (she/her)</h3>
                        <p className="pageText" style={{ fontSize: "calc(0.55vw + 15px)" , textAlign: "left", opacity: "1" }}>
                        Our CSO has a BSc in Biochemistry and Genetics from the University of Sheffield which was followed by an MSc in Algal Biotechnology and Bioeconomy at the University of the Highlands and the Islands. From there, Joelle went on to complete a PhD at the University of Madrid, where she worked alongside Federica Bertocchini, managing to identify enzymes in the wax worm insect which are capable of oxidising and degrading polyethylene both at room temperature and in aqueous conditions. Our CSO's extensive background in algal bioengineering and groundbreaking enzyme discoveries have undoubtedly played an essential part in getting RecycAlgal to where it is today.                             </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                <img width="95%" style={{position:"relative",top:"50%",transform:"translateY(-50%)",paddingTop:"auto",paddingBottom:"auto"}} src={joelle}></img>
                </Grid>




                <Grid item xs={4}>
                <img width="95%" style={{position:"relative",top:"50%",transform:"translateY(-50%)",paddingTop:"auto",paddingBottom:"auto"}} src={ethan}></img>
                </Grid>

                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Ethan Santos</h1>
                    <h3 style={{ opacity: "1" }}>Chief Financial Officer (CFO) (he/him)</h3>
                        <p className="pageText" style={{  fontSize: "calc(0.55vw + 15px)" ,textAlign: "left", opacity: "1" }}>
Our CFO has a BSc in Biological Sciences from Durham University and an MBA from The Wharton School. He brings extensive experience in the Life Science industry, having spent the last fifteen years in financial and strategic roles at AstraZeneca.  
                             </p>
                    </div>

                </Grid>



                <Grid item xs={8}>
                    <div style={{ padding: "20px" }}><h1 className="pageHeader" style={{ opacity: "1" }}>Shannen Cullen</h1>
                    <h3 style={{ opacity: "1" }}>Chief Marketing Officer (CMO) (she/her)</h3>
                        <p className="pageText" style={{  fontSize: "calc(0.55vw + 15px)" ,textAlign: "left", opacity: "1" }}>
                        Our CMO has a BSc in Biological Science from Durham University and an MSc in Strategic Marketing from Imperial College Business School, which allows her to navigate the digital marketing landscape with ease and stir the company’s reach into the most fruitful and profitable areas of the market.                             </p>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <img width="95%" style={{position:"relative",top:"50%",transform:"translateY(-50%)",paddingTop:"auto",paddingBottom:"auto"}} src={shannen}></img>
                </Grid>
            </Grid>
        </div>



    )

}