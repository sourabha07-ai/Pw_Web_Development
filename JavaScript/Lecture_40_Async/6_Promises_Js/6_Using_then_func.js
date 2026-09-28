// const promise = new Promise((resolve,reject)=>{
//        resolve('Sourabha jena');
// })

const promise = Promise.resolve("Hello Sourbha Bhai")

promise.then((message)=>{
    console.log(message);
})