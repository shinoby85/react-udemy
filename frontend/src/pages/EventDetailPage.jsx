import {useParams} from "react-router-dom";

function EventDetailPage(props) {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      {params.id}
    </>
  );
}

export default EventDetailPage;