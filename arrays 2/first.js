function swapp(arr){
  left = 0;
  right = arr.length-1
  while(left<right){
    [arr[left],arr[right]] = [arr[right],arr[left]];
    left++;
    right--;
  }
  return arr;
}

arry=[21,4,56,8]
view=swapp(arry)
console.log(view)



function rotateArr(arr, shiftBy) {
  shiftBy = shiftBy % arr.length; // handle large shiftBy values
  for (let i = 0; i < shiftBy; i++) {
      let last = arr[arr.length - 1];
      for (let j = arr.length - 1; j > 0; j--) {
          arr[j] = arr[j - 1];
      }
      arr[0] = last;
  }
  return arr;
}

r=rotateArr([1,2,3],1)
console.log(r)



function retainRange(arr, min, max) {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
      if (arr[i] >= min && arr[i] <= max) {
          arr[j] = arr[i];
          j++;
      }
      i++;
  }
  while (j < arr.length) {
      arr.pop();
      j++;
  }
  return arr;
}