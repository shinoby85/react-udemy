import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: 'm1',
    title: 'My First Meetup',
    image: 'https://cdn.tripster.ru/thumbs2/22b89a82-5e6e-11ee-9db2-261f21ee6316.1220x600.jpeg',
    address: 'First meetup address 12, 117744 first street',
    description: 'This is the first meetup'
  },
  {
    id: 'm2',
    title: 'My Second Meetup',
    image: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2.jpg',
    address: 'Second meetup address 234, 12345 second street',
    description: 'This is the second meetup'
  }
];
export default function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <MeetupList meetups={DUMMY_MEETUP}/>
    </>
  )
}