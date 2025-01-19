import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";
import Head from "next/head";

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
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your own meetups and create amazing network opportunities.."/>
      </Head>
      <h1>New meetup page</h1>
      <NewMeetupForm onAddMeetup={addMeetupPage}/>
    </>
  )
}