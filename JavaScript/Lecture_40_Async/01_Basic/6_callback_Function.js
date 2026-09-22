function hello(callback){

   console.log("from hello() function");
   callback();
}
function hii(){
   console.log("from hii functin");
}

hello(hii);