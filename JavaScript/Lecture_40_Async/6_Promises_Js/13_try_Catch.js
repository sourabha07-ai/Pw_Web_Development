async function getData(){
    return new Promise((resolve,reject)=>{
        reject("Something went wrong")
    })
}

async function loadData(){
    try{
        const result = await getData();
        console.log(result)
    } 
    catch(error){
       console.log("Error:",error)
    }
}

loadData()