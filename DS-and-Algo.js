//Naive solution === with Big O of O(n^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

//Frequency counter solution === with Big O of O(n)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};

  for (let val of arr1) {
    obj1[val] ? (obj1[val] += 1) : (obj1[val] = 1);
  }
  for (let val of arr2) {
    obj2[val] ? (obj2[val] += 1) : (obj2[val] = 1);
  }
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }
  console.log(obj1);
  console.log(obj2);
  return true;
};

//Solving the Anagram challenge with the frequency counter method
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};

  for (let val of str1) {
    lookup[val] ? (lookup[val] += 1) : (lookup[val] = 1);
  }
  for (let val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  console.log(lookup);
  return true;
};

//Naive solution for sumZero
const sumZero = arr => {
  if (!Array.isArray(arr)) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

//Multiple pointer solution for sumZero
const sumZero = arr => {
  if (!Array.isArray(arr)) {
    return;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

//Solving the countUniqueValues problem with the frequency counter method
const countUniqueValues = arr => {
  let obj = {};
  let result;
  for (var i = 0; i < arr.length; i++) {
    let each = arr[i];
    obj[each] ? (obj[each] += 1) : (obj[each] = 1);
    result = Object.keys(obj).length;
  }
  console.log(obj);
  return result;
};

//Solving the countUniqueValues problem with the Multiple pointers method
const countUniqueValues = arr => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

[1, 1, 1, 2, 2, 3, 4, 5];
