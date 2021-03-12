import {VercelRequest, VercelResponse} from '@vercel/node';
import { MongoClient, Db } from 'mongodb'
// import {fullUser} from '../../pages/moveit'

let cachedDb: Db=null;



async function connectToDatabase(uri:string){

    if(cachedDb){
        return cachedDb;
    }

    const client= await MongoClient.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });


    const dbName= new URL(uri).pathname.substr(1);
    
    const db= client.db(dbName);
    cachedDb= db;

    return db;
}

export default async (request:VercelRequest, response:VercelResponse)=>{
    const {user}=request.body;

    const db= await connectToDatabase(process.env.MONGODB_URI);
    const collection= db.collection('users')

    await collection.insertOne({
        user,
        subscribedAt: new Date(),

    })

    return response.status(201).json({ok:true});
}