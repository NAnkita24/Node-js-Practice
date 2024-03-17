const dbConnect=require('./Mongodb')

const insert=async()=>{
    const db=await dbConnect();
    const result= await db.insertOne({name:"vivo",brand:"vivo",prize:150})

    console.warn(result)
}
insert()
