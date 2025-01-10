import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function addMeetupPage(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <>
      <h1>New meetup page</h1>
      <NewMeetupForm onAddMeetup={addMeetupPage}/>
    </>
  )
}