const dbConnect=require('./Mongodb')

// dbConnect().then((resp)=>{
// resp.find({name:'samsung'}).toArray().then((data)=>{
//     console.warn(data);
// });
// })

const main=async()=>{
    let data =await dbConnect();
    data=await data.find().toArray();
    console.warn(data)
}
main();