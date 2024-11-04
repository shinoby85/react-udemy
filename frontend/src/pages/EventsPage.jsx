import {Link} from "react-router-dom";

const EVENTS = [
  {id: "ev-1", title: "Event 1"},
  {id: "ev-2", title: "Event 2"},
  {id: "ev-3", title: "Event 3"},
  {id: "ev-4", title: "Event 4"},
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>

    </>
  );
}

export default EventsPage;