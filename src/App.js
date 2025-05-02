import './App.css';
import CounterApp from './Component/CounterApp';
import CounterAppFunctionalBased from './Component/CounterAppFunctionalBased';

function App() {
  return (
    <div className="App">
        <CounterApp/>
        <hr></hr>
        <CounterAppFunctionalBased/>
    </div>
  );
}

export default App;
