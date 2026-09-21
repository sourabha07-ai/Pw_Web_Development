setTimeout(()=>{
   console.log("Task 1");
   
   setTimeout(()=>{
      console.log("Task 2");

      setTimeout(()=>{
         console.log("Task 3");
      },3000)
   },2000)
},1000)