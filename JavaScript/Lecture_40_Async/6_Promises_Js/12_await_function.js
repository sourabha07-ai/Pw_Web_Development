async function getData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
           res("Data Received");
        },2000)
    })
}

async function showData() {
    console.log("Before await");

    const result = await getData();

    console.log(result);
    console.log("after await")
}


showData();
console.log("Outside Function");