
import './App.css';
import ResponsiveAppBar from './navbar';
import background from './algae.png'
import turtle from './turtle.jpg'
import Paper from '@mui/material/Paper';
function App() {

  return (
    <div className="App" >
      <div  style={{backgroundImage: `url(${background})`,backgroundSize: "cover",height: "100vh",color: "#f5f5f5"}}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Paper elevation = {5}style={{backgroundColor:"rgba(0, 0, 0, 0.8)",maxWidth:"50%",margin:"auto"}}>
      <h1 style={{opacity:"1"}}>About us</h1>
      <p style = {{opacity:"1"}}>We are a new company proposing a novel way to decompose plastic. Through our production of plastic-degrading bioengineered microalgae, we aim to develop a more sustainable alternative to incineration, landfill and recycling</p>
     <img height="500px" src={turtle}></img>
      <p>
        <br/>
        <br/>
        <br/><br/><br/><br/><br/><br/>
      </p>
      </Paper>

      </div>
    </div>
  );
}

export default App;
