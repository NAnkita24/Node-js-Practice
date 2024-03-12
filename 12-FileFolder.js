const fs=require('fs');
const path=require('path');

const dirPath =path.join(__dirname,'files');
console.warn(dirPath);




fs.readdir(dirPath,(err,files)=>{
    files.forEach((item) => {
        console.log("The file name is ",item)
    });

})

