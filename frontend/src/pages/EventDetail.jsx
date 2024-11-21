import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

function EventDetail(props) {
  const {event, events} = useRouteLoaderData('event-detail');
  return (
    <>
      <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
        <Await resolve={event}>
          {eventDetails => <EventItem event={eventDetails}/>}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
        <Await resolve={events}>
          {eventsDetails => <EventsList events={eventsDetails}/>}
        </Await>
      </Suspense>

    </>
  );
}

export default EventDetail;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw json({message: `Could not fetch event with id ${id}`}, {status: 500});
  } else {
    const dataResponse = await response.json();
    return dataResponse.event;
  }
}

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

export async function loader({request, params}) {
  const id = params.id;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  })
}

export async function action({request, params}) {
  const id = params.id;
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({message: `Could not delete event.`}, {status: 500});
  } else {
    return redirect('/events');
  }
}