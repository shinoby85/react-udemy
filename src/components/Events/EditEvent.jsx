import {Link, useNavigate, useParams} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, queryClient, updateEvent} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EditEvent() {
  const params = useParams();
  const {data, isPending, isError, error} = useQuery({
    queryKey: ["events", {eventId: params.id}],
    queryFn: ({signal}) => fetchEvent({id: params.id, signal}),
  });
  const navigate = useNavigate();

  const {mutate} = useMutation({
    mutationFn: updateEvent,
    onMutate: async (date) => {
      const newEvent = data.event;
      await queryClient.cancelQueries(["events", {eventId: params.id}]);
      const previousEvent = queryClient.getQueryData(["events", {eventId: params.id}]);
      queryClient.setQueriesData(["events", {eventId: params.id}], newEvent);
      return {previousEvent};
    },
    onError: (error, data, context) => {
      queryClient.setQueriesData(["events", {eventId: params.id}], context.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["events", {eventId: params.id}],
      });
    }
  });

  function handleSubmit(formData) {
    mutate({
      id: params.id,
      event: formData
    });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator/>
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event."
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            OK
          </Link>
        </div>
      </>
    )
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
