Promise.resolve("Hello Sourabha")
       .then((value)=>console.log('Value:',value))
       .catch((err)=>console.log("Error:",err))
       .finally(()=> console.log("Loding finished"))