import {MongoClient} from "mongodb";

const MongoDB_CONNECT_PARAM = 'mongodb+srv://zoomstudyitstep:59ytu6cyNOrNcVC7@cluster0.sdyfn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
export default async function hundler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const {title, image, address, description} = data;

    const client = await MongoClient.connect(MongoDB_CONNECT_PARAM);
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message: "Meetup inserted!!!"})
  }
}