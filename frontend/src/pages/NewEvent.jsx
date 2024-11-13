import EventForm from "../components/EventForm";
import {json, redirect} from "react-router-dom";

function NewEvent() {
  return (
    <EventForm/>
  );
}

export default NewEvent;

export async function action({request, params}) {
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    description: data.get('description'),
    image: data.get('image'),
    date: data.get('date')
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw json({message: 'Data is not saved.'}, {status: 500});
  }
  return redirect(`/events`);
}