import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";

export default function NewMeetup() {
  const router = useRouter();

  async function addMeetupPage(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    console.log(data);

    router.push("/");

  }

  return (
    <>
      <h1>New meetup page</h1>
      <NewMeetupForm onAddMeetup={addMeetupPage}/>
    </>
  )
}