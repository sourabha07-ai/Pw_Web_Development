let form = document.querySelector('#form');
let input_name = document.querySelector('#name');
let btn = document.querySelector('#btn');
let result = document.querySelector("#result");

form.addEventListener('submit',(event)=>{

       event.preventDefault();

        let name = input_name.value;
        if(name === ""){
                result.textContent = "Name is required";
        }else{
                result.textContent = `Hello ${name}`;    
        }
});