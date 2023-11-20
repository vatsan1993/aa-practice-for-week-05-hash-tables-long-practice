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
  // Your code here
}

function duplicate(arr) {
  // Your code anagrams('pear', 'bear')here
}

function twoSum(nums, target) {
  // Your code here
}

function wordPattern(pattern, strings) {
  // Your code here
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
