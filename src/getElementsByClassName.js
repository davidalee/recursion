// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];

  var recursive = function(node) {
  	// Checks current node for target class
	  if (node.classList) {
	  	if (node.classList.contains(className)) {
	  		results.push(node);
	  	}
	  }

	  // Checks current node for childNodes, calls recursive() if there are
  	if (node.hasChildNodes()) {
  		for (var i = 0; i < node.childNodes.length; i++) {
  			recursive(node.childNodes[i]);
  		}
  	}
  }

  recursive(document.body);
  return results;
};