const fs=require('fs');
const input= process.argv;

fs.writeFileSync(input[2],input[3]);

console.log(input[1]);
console.log(input[2]);
console.log(input[3]);
