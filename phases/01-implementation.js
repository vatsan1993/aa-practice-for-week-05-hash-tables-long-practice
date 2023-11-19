class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    // Your code here
    let loadFactor = this.count / this.capacity;
    if (loadFactor >= 0.7) {
      this.resize();
    }

    let index = this.hashMod(key);
    if (this.data[index] === null) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      let data = this.data[index];
      let placed = false;
      while (data !== null) {
        if (data.key === key) {
          data.value = value;
          placed = true;
          break;
        }
        data = data.next;
      }
      if (!placed) {
        let data = this.data[index];
        let newNode = new KeyValuePair(key, value);
        newNode.next = data;
        this.data[index] = newNode;
        this.count++;
      }
    }
  }

  read(key) {
    // Your code here
    let index = this.hashMod(key);
    let data = this.data[index];
    while (data !== null) {
      if (data.key === key) {
        return data.value;
      }
      data = data.next;
    }
  }

  resize() {
    // Your code here
    let elements = [...this.data];
    this.capacity = this.capacity * 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (element != null) {
        while (element !== null) {
          this.insert(element.key, element.value);
          element = element.next;
        }
      }
    }
  }

  delete(key) {
    // Your code here
    let index = this.hashMod(key);
    let element = this.data[index];
    if (element == null) {
      return 'Key not found';
    }
    if (element.key === key) {
      this.data[index] = this.data[index].next;
    } else {
      let prev = element;
      let mover = element;
      while (mover != null) {
        if (mover.key === key) {
          prev.next = mover.next;
          break;
        } else {
          prev = mover;
          mover = mover.next;
        }
      }
      if (mover === null) {
        return 'Key not found';
      }
    }
    this.count--;
  }
}

// let hashTable = new HashTable();

// hashTable.insert('key1', 'value1');
// hashTable.insert('key2', 'value2');
// hashTable.insert('key3', 'value3');

// let capacity = hashTable.capacity;

// hashTable.resize();

// hashTable.read('key1');
// hashTable.read('key2');
// hashTable.read('key3');

module.exports = HashTable;
