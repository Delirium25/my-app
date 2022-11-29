import './App.css';
import Beers from './components/Beers';
import Button from './components/Button';
/* import Hello from './components/Hello'; */
import beersData from './data';

function App() {
  return (
    <div className="App">
      <Button/>
      <Beers data={beersData.cards}/>
    </div>
  );
}

export default App;
