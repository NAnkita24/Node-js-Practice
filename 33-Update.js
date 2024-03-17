const dbConnect=require('./Mongodb')

const update=async()=>{
    let data=await dbConnect();
    let result=await data.updateOne({name:"oppo"},{
        $set:{name:"max pro 5"}})
        console.warn(result)
}
update()