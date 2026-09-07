// 1️⃣ document  
// The document represents the HTML page.

console.log(document);
// console.log(document.title);

//* 2️⃣ Selecting HTML Elements
// let heading = document.getElementById("title");
// console.log(heading);

// heading.textContent = "Hello Sourabha!";
// console.log(heading);


// let h1 = document.querySelector("#title");
// console.log(h1);

// let p1 = document.querySelector(".text");
// console.log(p1);


// 3️⃣ Changing HTML/CSS

//? 1️⃣ Change text 

// let change_textContent = document.querySelector("#title").textContent ="Hello JavaScript!";
// console.log(change_textContent);

//? 2️⃣ Change HTML

// let change_html = document.querySelector(".text").innerHTML = "<h2>Welcome back!...</h2>";
// console.log(change_html);

//? 3️⃣ Change CSS

// let box = document.querySelector("#box");
// box.style.backgroundColor = "Red";
// box.style.fontSize = "40px";
// box.style.display = "inline";
// box.style.border = "2px solid  green ";
// box.style.borderRadius = "6px";
// box.style.padding = "3px";
// box.style.cursor = "pointer";

//? 4️⃣Creating & Removing Elements

let p = document.createElement('p');
p.textContent = "Welcome back Sir...!";
document.body.appendChild(p);

//? create a list 
let li = document.createElement("li");
li.textContent = "JavaScript";

document.querySelector("#list").appendChild(li);

//? Remove Element

let ele = document.querySelector('.text');
ele.remove();





