const neg_to_pos = (num) =>{
    if(num >= 0) return num;
    else return num * -1;
}

console.log(neg_to_pos(12));
console.log(neg_to_pos(-12));
console.log(neg_to_pos(-12-12));
console.log(neg_to_pos(12-12));
