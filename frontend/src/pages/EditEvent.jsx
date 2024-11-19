import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

function EditEvent(props) {
  const data = useRouteLoaderData("event-detail");
  return (
    <EventForm event={data.event} method="PATCH"/>
  );
}

export default EditEvent;