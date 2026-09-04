let arr = [12,13,14,15,16,17];

arr.push(18);//insert into last index
console.log(arr);

arr.pop();
console.log(arr);

let result = arr.slice(1,4); //original array not changed
console.log(result);

// arr.splice(1,4);//change original
// console.log(arr);


