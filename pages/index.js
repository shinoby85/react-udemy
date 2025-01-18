import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";

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

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   // fetch data from an API
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUP
//     }
//   }
// }

export async function getStaticProps() {
  const MongoDB_CONNECT_PARAM = 'mongodb+srv://zoomstudyitstep:HuKACEetXL3p008o@cluster0.sdyfn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  const client = await MongoClient.connect(MongoDB_CONNECT_PARAM);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      })),
    },
    revalidate: 10
  }
}

export default function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUP);
  // }, []);
  return (
    <>
      <h1>Home page</h1>
      <MeetupList meetups={props.meetups}/>
    </>
  )
}