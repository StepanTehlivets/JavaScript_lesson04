var array = [ 2, -45, 62, 45, 84, -31, 84, -21, 43, 51, 54, 52, 88, 61, 31, 71,
		31, 25, -94, 180 ]

array.sort(function(num1,num2){
	return num1-num2;
}
);
console.log(array);
array.reverse();
console.log(array);



var pos=array.filter(function(num) {
	return num>0;
})

console.log(pos);

var neg=array.filter(function(num) {
	return num<0;
})

console.log(neg);
