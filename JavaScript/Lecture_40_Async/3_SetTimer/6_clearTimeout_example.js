const notification = setTimeout(()=>{
   console.log("New Notification");
},5000);

clearTimeout(notification);
console.log("Notification Cancel");

