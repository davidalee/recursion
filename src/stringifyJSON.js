// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// JSON.stringify({ x: 5, y: 6 });
//'{"x":5,"y":6}' or '{"y":6,"x":5}'

var stringifyJSON = function(obj) {
	console.log(typeof obj, obj);		// for debugging purposes; remove when done
  if (Array.isArray(obj)) {
  	if (obj.length === 0) {		// Checks for empty array
  		return '[]';
  	}

  	return obj.map(function(x) {
  		return stringifyJSON(x);
  	})
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (obj === null) {
  	return 'null';
  } else if (typeof obj === 'boolean') {
  	return String(obj);
  } else if (typeof obj === 'number') {
  	return String(obj);
  } else if (typeof obj === 'object') {

  	if (Object.keys(obj).length === 0) {		// Checks for empty objects
  		return 'null';
  	}

  	var result = [];

  	for (var key in obj) {
  		result.push('"' + key + '":' + obj[key]);
  	}

  	return '{' + result.join(',') + '}';
  } else {
  	return String(obj);		// returns if obj is a boolean or number
  }
};
