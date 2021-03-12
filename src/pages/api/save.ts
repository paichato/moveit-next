import {VercelRequest, VercelResponse} from '@vercel/node';
import { MongoClient, Db } from 'mongodb'

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
    const {email}=request.body;

    const db= await connectToDatabase(process.env.MONGODB_URI);
    return response.json({message: `Hello ${email}`});
}