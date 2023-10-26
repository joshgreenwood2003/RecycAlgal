
import './App.css';
import ResponsiveAppBar from './navbar';
import { Box } from '@mui/material';
import background from './algae.png'
function App() {

  const styles = {
    paperContainer: {
        height: 1356,
        backgroundImage: `url(${"algae.png"})`
    }
  };

  return (
    <div className="App" style = {{backgroundImage:"./algae.png"}}>


      <ResponsiveAppBar></ResponsiveAppBar>
      <header   style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
   // height: "100vh",
    color: "#f5f5f5"
}} className="App-header">
        <p>
          Brought to you by our wonderful researcher Joelle Harrison
        </p>
      </header>
    </div>
  );
}

export default App;
