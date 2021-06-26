function sumAll(arr) {

  arr.sort(function(a, b){return a-b});


  let firstElem = arr[0],
    lastElem = arr[1],
    res = firstElem;

    while (firstElem !== lastElem) {
      res += ++firstElem;
    }

  return res;

}

sumAll([1, 4]);