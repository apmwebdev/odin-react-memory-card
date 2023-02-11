import { useState } from 'react';
import './stylesheets/App.css'
import Cards from './components/cards';
import Scoreboard from './components/Scoreboard';
import Header from './components/Header';

function App() {
  const [selections, setSelections] = useState<number[]>([]);

  const resetSelections = () => {
    setSelections([]);
  }

  const checkSelection = (selection:number) => {
    if (selections.includes(selection)) {
      resetSelections();
      return false;
    } else {
      setSelections(prevState => [...prevState, selection]);
      return true;
    }
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Scoreboard selections={selections} />
        <Cards checkSelection={checkSelection} />
      </main>
    </div>
  )
}

export default App
