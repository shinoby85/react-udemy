import Accordion from "./components/Accordion/Accordion.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";
import {PLACES} from "./places.jsx";
import Place from "./Place.jsx";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
        <Accordion.Item className="accordion-item" id="experience">
          <Accordion.Title className="accordion-item-title">We got 20 years of
            experience</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business of planing highly individualized vacation trips for more then 20 years.</p>
            </article>
          </Accordion.Content>

        </Accordion.Item>
        <Accordion.Item id="local-guides" className="accordion-item">
          <Accordion.Title className="accordion-item-title">We are working with local
            guides.</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti impedit in molestiae quos
                velit?</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
        {(item) => <Place item={item}/>}
      </SearchableList>
      <SearchableList items={['Item 1', 'Item 2', 'Item 3']} itemKeyFn={(item) => item}>
        {(item) => item}
      </SearchableList>

    </section>
  </main>;
}

export default App;
