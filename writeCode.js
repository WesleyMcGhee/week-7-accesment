
const addToZero = (arr) => {
  if(arr.length < 2){
    return false;
  }
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return true;
      }
    }
  }
  return false;
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

console.log(addToZero([2, 3, 3, 2]))