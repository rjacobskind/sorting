function swap(num){
  num++;
  return num;
}

function comparisonCount(){

}

function bubbleSort(arr) {
  var swapCount = 0;
  //
  // while(){
    for (var i = 0; i < arr.length - 1; i++){
      var current;

      if (arr[i+1] < current){
        current = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = current;
        swapCount = swap(swapCount);
      }
    }

      if(swapCount === 0){
        return arr;
      }

      else{
        return bubbleSort(arr);
      }
  }
// }

[5,2,4,3,1]
[2,5]
