import {CORE_CONCEPTS} from './data';
import Header from './components/Header'
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState('');
  const [isParam, setIsParam] = useState(false);
  const isShowDemo = false;

  function handleSelectedTab(tab) {
    setSelectedTab(tab);
    setTimeout(() => {
      setSelectedTab('components');
    }, 5000);
  }

  function handleUpdateIsParam() {
    setIsParam((oldIsParam) => !oldIsParam);
    setIsParam((oldIsParam) => !oldIsParam);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/*<CoreConcept {...CORE_CONCEPTS[0]}/>*/}
            {/*<CoreConcept {...CORE_CONCEPTS[1]}/>*/}
            {/*<CoreConcept {...CORE_CONCEPTS[2]}/>*/}
            {/*<CoreConcept {...CORE_CONCEPTS[3]}/>*/}
            {/*<CoreConcept*/}
            {/*  image={CORE_CONCEPTS[0].image}*/}
            {/*  title={CORE_CONCEPTS[0].title}*/}
            {/*  description={CORE_CONCEPTS[0].description}/>*/}
            {/*<CoreConcept*/}
            {/*  image={CORE_CONCEPTS[1].image}*/}
            {/*  title={CORE_CONCEPTS[1].title}*/}
            {/*  description={CORE_CONCEPTS[1].description}/>*/}
            {/*<CoreConcept*/}
            {/*  image={CORE_CONCEPTS[2].image}*/}
            {/*  title={CORE_CONCEPTS[2].title}*/}
            {/*  description={CORE_CONCEPTS[2].description}/>*/}
            {/*<CoreConcept*/}
            {/*  image={CORE_CONCEPTS[3].image}*/}
            {/*  title={CORE_CONCEPTS[3].title}*/}
            {/*  description={CORE_CONCEPTS[3].description}/>*/}

            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept

                image={concept.image}
                title={concept.title}
                description={concept.description}
              />))}

          </ul>
        </section>
        <section id='examples'>
          <h2>Examples {isParam ? 'HELLO' : 'GOODBYE'}</h2>
          <menu>
            {
              isShowDemo &&
              <div>
                <button onClick={handleUpdateIsParam}>Click</button>
                <button onClick={handleUpdateIsParam}>Test button</button>
              </div>
            }

            <TabButton isSelect={selectedTab === 'components'}
                       select={() => handleSelectedTab('components')}>Components</TabButton>
            <TabButton isSelect={selectedTab === 'jsx'} select={setSelectedTab.bind(null, 'jsx')}>JSX</TabButton>
            <TabButton isSelect={selectedTab === 'props'} select={() => setSelectedTab('props')}>Props</TabButton>
            <TabButton isSelect={selectedTab === 'state'} select={() => handleSelectedTab('state')}>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;