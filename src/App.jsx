import {CORE_CONCEPTS} from './data';
import Header from './components/Header'
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
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
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}/>
            <CoreConcept
              image={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}/>
            <CoreConcept
              image={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}/>
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;