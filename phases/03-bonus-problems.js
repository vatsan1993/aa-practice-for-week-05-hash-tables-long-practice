const HashTable = require('./01-implementation.js');
let kth = (string, k) => {
  let hashTable = new HashTable();
  let chars = new Set();
  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    let count = hashTable.read(ch);
    chars.add(ch);
    if (count) {
      hashTable.insert(ch, count + 1);
    } else {
      hashTable.insert(ch, 1);
    }
  }
  let counts = [];
  for (let char of chars) {
    counts.push(hashTable.read(char));
  }
  counts.sort((a, b) => b - a);
  let count = counts[k - 1];
  for (let char of chars) {
    if (hashTable.read(char) === count) {
      return char;
    }
  }
};

console.log(kth('aaabbc', 1)); //  => 'a'
console.log(kth('aaabbc', 2)); //  => 'b'
console.log(kth('aaabbc', 3)); //  => 'c'
