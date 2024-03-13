let a=10
let b=20

let waiting=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000)
    
})

waiting.then((data)=>{
    b=data;
    console.log(a+b);

})

