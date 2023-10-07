

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
      result.push(callback(item));
    });
    return result;
  }
  
 function myReduce(collection, callback, initialValue) {
  const keys = Object.keys(collection);
  let accumulator = initialValue !== undefined ? initialValue : collection[keys[0]];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < keys.length; i++) {
    const key = keys[i];
    accumulator = callback(accumulator, collection[key], collection);
  }
  return accumulator;
}

  function myFind(collection, predicate) {
    for (const item of collection) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  function myFirst(collection, n) {
    if (!n) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  
  function myLast(collection, n) {
    if (!n) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  
 function myKeys(collection) {
  const newArr = [];
  if (typeof collection === 'object') {
    const keyPush = Object.keys(collection);
    newArr.push(...keyPush); 
  }
  return newArr;
}

  
  function myValues(collection) {
    const newArr = []
    if (typeof collection === 'object') {
      const objectPush = Object.values(collection);
      newArr.push(...objectPush)
    }
    return newArr;
  }
  
  
  