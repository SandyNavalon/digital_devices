import './App.scss';
import { Chrono, Countdown, DigitalClock } from './components';
function App() {
  return (
    <div className="App">
      <DigitalClock/>
      <Countdown/>
      <Chrono/>
    </div>
  );
}

export default App;
