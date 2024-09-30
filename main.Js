
//2
function cutVowel(str) {
  const vowels = 'auieoAIUEO'; 
  return str.split('').filter(char => !vowels.includes(char)).join(''); 
}

console.log(cutVowel("mashina yuryabdi")); 
console.log(cutVowel("bugun havo sovuq"));




// 8
function num(arr) {
    let result = {};
    arr.forEach((value, index) => { result[index + 1] = value;});
    return result;
}

console.log(num([]));
console.log(num(["a","b","c"]));


//9
function isTriangle(a, b, c) { return (a + b > c) && (a + c > b) && (b + c > a);}

console.log(isTriangle(7,2,2));
console.log(isTriangle(1,2,2));

//10
function between(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) { result.push(i); }
    return result;
}


console.log(between(1, 4));
console.log(between(-2, 2)); 