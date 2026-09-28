function checkInternet(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const randomNumber = Math.random();
            if(randomNumber < 0.8){
                resolve("Successfully Connection")
            }else{
                reject("Connection Failed")
            }
        },2000)
    })
}

checkInternet().then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log("Error:",err)
})



