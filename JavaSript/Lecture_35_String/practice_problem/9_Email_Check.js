let email = 'sourabha@gmail.com';

let res = email.includes('@');
let res1 = email.endsWith('.com');

if(res == true && res1  == true ){
        console.log("Valid Email");
}else{
        console.log("Not Valid Email");
}