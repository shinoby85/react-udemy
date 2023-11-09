import './index.css'
import Header from './components/Header'
import {useState} from "react";
import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (<div>
    <Header/>
    <main>
      <CoreConcepts/>
      <Examples/>
    </main>

    <main>
      <h2>Time to get started!</h2>
    </main>
  </div>)
}

export default App