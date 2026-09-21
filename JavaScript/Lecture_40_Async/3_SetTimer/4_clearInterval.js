let count = 0;

const timeInterval = setInterval(()=>{
   count++;
   console.log(count);

   if(count == 15){
      clearInterval(timeInterval)
   }
},1000);

