async function greet(){
    return "Hello Sourabha Ji";
}

// const result = greet();
// console.log(result); //? Promise { 'Hello Sourabha Ji' }

greet().then((message)=>{
    console.log(message) //* Hello Sourabha Ji
})