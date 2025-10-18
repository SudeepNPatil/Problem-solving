function findFirstAndLast(array, target) {
  let left = 0;
  let right = array.length - 1;
  let startlocation = -1,
    endlocation = -1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      startlocation = mid;
      endlocation = mid;
      if (array[mid + 1] === target) {
        endlocation = mid + 1;
      } else if (array[mid - 1] == target) {
        startlocation = mid - 1;
      }

      return [startlocation, endlocation];
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [startlocation, endlocation];
}

console.log(findFirstAndLast([1, 2, 3, 4, 5, 6, 6, 7, 8, 9], 6));

//for all the test case this is best

/* var searchRange = function(array, target) {
    let left = 0;
  let right = array.length - 1;
  let startlocation = -1,
    endlocation = -1;

    if(array.length === 1){
        if(array[0] === target){
            return [0,0];
        }else{
            return [-1,-1]
        }
    }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      startlocation = mid;
      endlocation = mid;

      let point1 = mid -1;
        while(point1 >= 0 && array[point1] === target ){
            startlocation = point1
            point1--; 
        }

        let point2 = mid + 1;
        while(point2 < array.length && array[point2] === target){
            endlocation = point2
            point2++;
        }

      return [startlocation, endlocation];

    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [startlocation, endlocation];
};
 */
