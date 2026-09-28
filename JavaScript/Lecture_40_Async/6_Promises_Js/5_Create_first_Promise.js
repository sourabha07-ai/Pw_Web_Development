const promise = new Promise((resolve,reject)=>{
   const success = true;

   if(success){
    resolve("Task Complete");
   }else{
    reject("Task Failed!")
   }
   
})

console.log(promise)