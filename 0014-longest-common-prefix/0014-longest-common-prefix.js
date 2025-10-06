/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    else{
        min = 201;
        for(let i =0; i< strs.length; i++){
            if(min> strs[i].length) min = strs[i].length
        }
        console.log(min);

        let high = min;
        let low = 0;
        let ans = -1
        while(high>=low){

            let t = true;
            let mid = Math.ceil((high+low)/2);
            console.log(low, high, mid)
            for(let i = 0; i<strs.length-1; i++){
                if(strs[i].substring(0,mid) !== strs[i+1].substring(0,mid)){

                 t = t && false
                 break;
                }
                else t = t && true;
            }

            if(t){
                ans = mid;
                low = mid +1;
            }
            else {
                high = mid - 1;
            }
        }
        if(ans != -1){

            return strs[0].substring(0,ans)
        }
    }
    return ''

};