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
      var current = arr[i];
      var next = arr[i+1];

      if (next < current){
        current = next;
        next = arr[i];
        swapCount = swap(swapCount);
      }

    }
    return arr;
  }
// }

[5,2,4,3,1]
[2,5]
