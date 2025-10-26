function isBadVersion(version) {
  return version >= bad;
}

function firstbadversion(n) {
  let left = 1,
    right = n;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

let n = 5;
let bad = 4;

console.log(firstbadversion(n));
