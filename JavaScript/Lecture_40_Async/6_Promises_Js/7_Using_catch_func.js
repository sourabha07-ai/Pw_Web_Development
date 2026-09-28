// const promise = new Promise((resolve,reject)=>{
//     reject("Something went Wrong")
// })

// promise.catch((err)=>{
//      console.log('Error:',err);
// })


//! method 2 

Promise.reject("Something is Missing").catch((err)=>{
    console.log('Error:',err);
})