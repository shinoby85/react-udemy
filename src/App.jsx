import {CORE_CONCEPTS, EXAMPLES} from './data'
import './index.css'
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'
import {useState} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (<div>
    <Header/>
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map(conceptItem=>
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          )}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            select={handleSelect.bind(null, 'components')}
          >Components</TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            select={() => handleSelect('jsx')}
          >JSX</TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            select={() => handleSelect('props')}
          >Props</TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            select={() => handleSelect('state')}
          >State </TabButton>
        </menu>
        {selectedTopic ? (<div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>) : 'Please select a topic'}

      </section>
    </main>

    <main>
      <h2>Time to get started!</h2>
    </main>
  </div>)
}

export default App