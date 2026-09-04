function reverseArray(arr) {
    // your code
    let reslut = [];
    for(let i = arr.length - 1; i >= 0;i-- ){
        reslut.push(arr[i]);
    }
    return reslut;
     
}

console.log("Reverse array: ",reverseArray([1, 2, 3, 4, 5]));