import CalcPad from './components/CalcPad';
import Screen from './components/Screen';
import './App.css';


function App() {
  return (
    <div className="calc">
      <Screen />
      <CalcPad />
    </div>
  );
}

export default App;
