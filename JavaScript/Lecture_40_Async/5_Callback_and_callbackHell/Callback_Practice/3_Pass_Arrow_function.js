function user(user_name,callback){
    callback(user_name);
};

user("Sourabha",(name)=>{
    console.log(name);
});