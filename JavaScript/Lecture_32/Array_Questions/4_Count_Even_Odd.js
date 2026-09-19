function countEvenOdd(arr) {
    // your code
    let even_count = 0;
    let odd_count = 0;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] % 2 === 0){
                even_count++;
        }else{
                odd_count++;
        }
    }
    return {even_count , odd_count};
}

console.log(countEvenOdd([10, 15, 20, 7, 8, 11]));