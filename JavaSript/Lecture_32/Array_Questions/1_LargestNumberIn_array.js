function findLargest(arr) {
    // your code
    let n = arr[0];
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > n ){
              n = arr[i];  
        }
    }
    return n;
}

console.log(findLargest([10, 25, 7, 45, 32]));