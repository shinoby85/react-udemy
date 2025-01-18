import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";

export async function getStaticPaths() {
  const MongoDB_CONNECT_PARAM = 'mongodb+srv://zoomstudyitstep:HuKACEetXL3p008o@cluster0.sdyfn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  const client = await MongoClient.connect(MongoDB_CONNECT_PARAM);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find({}, {_id: 1}).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString(),
      }
    }))
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const MongoDB_CONNECT_PARAM = 'mongodb+srv://zoomstudyitstep:HuKACEetXL3p008o@cluster0.sdyfn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  const client = await MongoClient.connect(MongoDB_CONNECT_PARAM);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const selectedMeetups = await meetupCollection.findOne({
    _id: new ObjectId(meetupId)
  });
  client.close();
  return {
    props: {
      meetupData: {
        title: selectedMeetups.title,
        image: selectedMeetups.image,
        description: selectedMeetups.description,
        address: selectedMeetups.address,
        id: selectedMeetups._id.toString()
      }
    }
  }
}

export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  )
}