
import './App.css';
import ResponsiveAppBar from './navbar';
import background from './algae.png'
function App() {

  return (
    <div className="App" >
      <div  style={{backgroundImage: `url(${background})`,backgroundSize: "cover",height: "100vh",color: "#f5f5f5"}}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <h1>About us</h1>
      <p>We are a new company proposing a novel way to decompose polymers</p>
      </div>
    </div>
  );
}

export default App;
