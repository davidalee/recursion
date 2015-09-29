// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    if (obj.length === 0) {   // Checks for empty array
      return '[]';
    }

    obj = obj.map(function(x) {
      return stringifyJSON(x);
    })

    return '[' + obj + ']';

  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'boolean') {
    return String(obj);
  } else if (typeof obj === 'number') {
    return String(obj);
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'function' || obj === undefined) {
    return ;
  } else if (typeof obj === 'object') {

    if (Object.keys(obj).length === 0) {    // Checks for empty objects
      return '{}';
    }

    var result = [];

    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {   // Skips current element for functions or undefined values in objects
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }

    return '{' + result.join(',') + '}';
  } 
};
