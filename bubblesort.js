function swap(){

}

function comparisonCount(){

}

function bubbleSort(arr) {
  var swap = true;

  for (var i = 0; i < arr.length - 1; i++){
    var current = arr[i];
    var next = arr[i+1];
    if (next < current){
      current = next;
      next = arr[i+1];
    }
  }
}

[5,2,4,3,1]
