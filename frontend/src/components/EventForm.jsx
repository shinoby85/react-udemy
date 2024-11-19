import {Form, json, redirect, useActionData, useNavigate, useNavigation} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({method, event}) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''}/>
        {data?.errors && data.errors.title && <p>{data.errors.title}</p>}
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''}/>
        {data?.errors && data.errors.image && <p>{data.errors.image}</p>}
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''}/>
        {data?.errors && data.errors.date && <p>{data.errors.date}</p>}
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''}/>
        {data?.errors && data.errors.description && <p>{data.errors.description}</p>}
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request, params}) {
  const method = request.method;
  const id = params.id;
  let url = "http://localhost:8080/events";
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    description: data.get('description'),
    image: data.get('image'),
    date: data.get('date')
  };
  if (method === "PATCH") {
    url += "/" + id;
  }
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({message: 'Data is not saved.'}, {status: 500});
  }
  return redirect(`/events`);
}
