const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'Crud')
const filepath=`${dirPath}/banana.txt`

fs.writeFileSync(filepath,'banana is yellow')
 console.log(filepath);

// fs.readFile(filepath,'utf8',(err,item)=>{
//     if(!err){
//         console.log(item);
//         console.log('done');
//     }else{
//         console.log(err);
//     }
// })

// fs.appendFile(filepath,'I like banana',(err)=>{
//     if (!err) {
//         console.log('file updated successfully');
//     }
// })

// fs.rename(filepath,`${dirPath}/Lemon.txt`,(err)=>{
//     if (!err) {
//         console.log('File rename successfully');
//     }
// });

//fs.unlinkSync(`${dirPath}/Lemon.txt`);