import {VercelRequest, VercelResponse} from '@vercel/node';
import { MongoClient, Db } from 'mongodb'
import { useContext } from 'react';
// import {fullUser} from '../../pages/moveit'

//back to business
let cachedDb: Db=null;

interface userFullData{
        login:String,
        name:String,
        avatar:String,
        ChallengesCompleted:Number,
        currentXp:Number,
        level:Number,
}

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
    // back to business
    
    const {user}=request.body;
    console.log(request.cookies);
    

    const db= await connectToDatabase(process.env.MONGODB_URI);
    const collection= db.collection('users')

    //    await collection.find({users:"facebook"}) -> continuar hoje. Verificar se ja existe na db
    await collection.insertOne({
        user:user,
        subscribedAt: new Date(),

    })

    return response.status(201).json({ok:true, user:user});
}