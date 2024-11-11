import {json, useLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetail(props) {
    const data = useLoaderData();
    return (
        <EventItem event={data.event}/>
    );
}

export default EventDetail;

export async function loader({request, params}) {
    debugger
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw json({message: `Could not fetch event with id ${id}`}, {status: 500});
    } else {
        return response;
    }
}