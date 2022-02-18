import './App.scss';
import { Chrono, Countdown, DigitalClock, Home, Navbar } from './components';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/digital-clock' element={<DigitalClock />} />
        <Route path='/chrono' element={<Chrono />} />
        <Route path='/countdown' element={<Countdown />} />
      </Routes>

    </Router>
  );
}

export default App;
