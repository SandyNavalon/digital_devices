import './App.scss';
import { Chrono, Countdown, DigitalClock, Navbar } from './components';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route path='/digital-clock' element={<DigitalClock />} />
        <Route path='/chrono' element={<Chrono />} />
        <Route path='/countdown' element={<Countdown />} />
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
