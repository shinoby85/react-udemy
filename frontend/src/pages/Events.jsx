import EventsList from '../components/EventsList';
import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {
  const {events} = useLoaderData();
  return (
    <Suspense fallback={<div style={{textAlign: 'center'}}>Loading...</div>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents}/>}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // throw new Response(JSON.stringify({message: "Could not fetch events."}), {status: 500});
    return json({message: "Could not fetch events."}, {status: 500});
  } else {
    const respData = await response.json();
    return respData.events;
  }
}

export async function loading() {
  return defer({
    events: loadEvents(),
  });
}