/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

   let arr = [];
   let r = 1
   let n = digits.length-1
for(let i = n; i>=0; i--){
    if(digits[i] + r === 10) {
        arr.unshift(0)
        console.log(digits[i] +r)
        r = 1;
    }
    else {
        arr.unshift(digits[i] + r)
        console.log(digits[i] +r)
        r = 0
    }
}
    if(r===1) arr.unshift(r)
    return arr

};