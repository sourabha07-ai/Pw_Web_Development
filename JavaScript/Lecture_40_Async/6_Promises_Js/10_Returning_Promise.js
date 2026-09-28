function getUser(){
    return Promise.resolve({id:12,name:"Sourabha Jena",age:24});
}

getUser()
     .then((user)=>{
     console.log("User name:",user.name);
     return Promise.resolve("user Loaded");})

    .then((message)=>{
       console.log("Message:",message)
   })