// Question 1
function maxOfTwoNumbers(x, y) {
if (x < Y) {
return y;
} else if (x > y) {
	return x;
}
}

// Question 2
function maxOfThree(x,y,z) {
if (x > y && x > z) {
	return x;
} if (y > z && y > x){
	return y;
} if (z > y && z > x) {
	return z;
}
}


// Question 3
function isCharacterAVowel(c) {
var vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.indexOf(c) === 1) {
	return true;
}
return false;
}

// Question 4
function sumArray(array) {
 var sum = 0;
 for (var i = 0; i < array.length; i++) {
 	sum += array[i];
 }
 return sum;
}


// Question 4
function multiplyArray(array) {
var product = array[0];
for (var i = 0; i < array.length, i++) {
	product *= array[i];
}
return product;
}


// Question 5
var numberOfArguments = function(){
return numberOfArguments.length;  
}



// Question 6
var reverseString = function (){
  var o = '';
  for (var i = s.length-1; i >= 0; i--)
  	o += s[i];
  return o;
};


// Question 7
function findLongestWord (array) {
  longest = 0;
  for (var i = 0; i < array.length; i++) {
  		if (array.length > longest) {
  			longest = array.length;
  		}
  }
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
