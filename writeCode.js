
function findZero (arr){
    let isZero = false;
      for (let i in arr){
        for (let j in arr){
          let sum = arr[i] + arr[j];
           if(sum === 0){
            isZero = true;
          }
        }
      }
      return isZero;
}
        
// O(n^2)

function findLongestWord(arr){
    let longestIndex = 0;
    let longestLength = 0;
    for(let i in arr){
        if(arr[i].length > longestLength){
            longestIndex = i;
            longestLength = arr[i].length;
        }
    }
    return arr[longestIndex];
}

//O(n)