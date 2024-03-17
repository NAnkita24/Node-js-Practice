const dbConnect=require('./Mongodb')

const deleteData=async()=>{
    let data=await dbConnect();
    let result=await data.deleteOne({name:"samsung"})
        console.warn(result)

        if(result.acknowledge){
            console.warn("record deleted")
        }
} 
deleteData()