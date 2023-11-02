

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import AboutUs from "./pages/AboutUs.js";
import Mission from './pages/Mission';
import Solution from './pages/Solution';
import Methods from './pages/Methods';
import Sustainability from './pages/Sustainability';
import Team from './pages/Team';

function App() {

  return (
    <div className="App" style={{ backgroundColor: "#f7e2ba", backgroundSize: "cover" }} >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutUs />} />
            <Route path="mission" element={<Mission />} />
          <Route path="solution" element={<Solution />} />
          <Route path="methods" element={<Methods/>} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
