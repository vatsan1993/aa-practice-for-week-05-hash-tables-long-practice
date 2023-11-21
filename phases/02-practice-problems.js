const HashTable = require('./01-implementation');
function anagrams(str1, str2) {
  // Your code here
  let hashTable1 = new HashTable();
  let hashTable2 = new HashTable();
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    let count1 = hashTable1.read(str1[i]);
    let count2 = hashTable2.read(str2[i]);
    if (count1 === undefined) {
      hashTable1.insert(str1[i], 1);
    } else {
      hashTable1.insert(str1[i], count1 + 1);
    }
    if (count2 === undefined) {
      hashTable2.insert(str2[i], 1);
    } else {
      hashTable2.insert(str2[i], count2 + 1);
    }
  }
  let isAnagram = true;
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    let count1 = hashTable1.read(char);
    let count2 = hashTable2.read(char);
    if (count2 == undefined) {
      return false;
    }
    if (count1 !== count2) {
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
}

function commonElements(arr1, arr2) {
  // let result = [];
  // let hashTable1 = new HashTable(arr1.length);

  // for (let i = 0; i < arr1.length; i++) {
  //   let count1 = hashTable1.read(arr1[i]);
  //   if (count1 === undefined) {
  //     hashTable1.insert(arr1[i], 1);
  //   } else {
  //     hashTable1.insert(arr1[i], count1 + 1);
  //   }
  // }
  // for (let i = 0; i < arr2.length; i++) {
  //   let val = arr2[i];
  //   let count2 = hashTable1.read(val);
  //   if (count2 !== undefined) {
  //     result.push(val);
  //   }
  // }
  // return result;

  let set1 = new Set();
  let set2 = new Set();
  for (let val of arr1) {
    set1.add(val);
  }
  for (let val of arr2) {
    set2.add(val);
  }

  let result = [];
  for (let val of set2) {
    if (set1.has(val)) {
      result.push(val);
    }
  }
  return result;
}

function duplicate(arr) {
  // Your code anagrams('pear', 'bear')here;
  let set = new Set();
  for (let val of arr) {
    if (set.has(val)) {
      return val;
    }
    set.add(val);
  }
}

function twoSum(nums, target) {
  // Your code here
  let set = new Set();
  for (let val of nums) {
    set.add(val);
  }
  for (let val of nums) {
    if (target - val !== val && set.has(target - val)) {
      return true;
    }
  }
  return false;
}

function wordPattern(pattern, strings) {
  // Your code here
  if (pattern.length !== strings.length) {
    return false;
  }
  let set1 = new Set();
  let set2 = new Set();
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let val = strings[i];
    set1.add(char);
    set2.add(val);
  }
  let res = set1.size === set2.size;
  return res;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
