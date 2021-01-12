let student1 = {
	facultyName : 'biology',
	age : 23
};
let student2 = {
	facultyName : 'chemistry',
	age : 32
};
let student3 = {
	facultyName : 'physics',
	age : 18
};
let student4 = {
	facultyName : 'informatics',
	age : 25
};
let student5 = {
	facultyName : 'psychic',
	age : 21
};
let student6 = {
	facultyName : 'art',
	age : 20
};
let student7 = {
	facultyName : 'linguistic',
	age : 28
};
let student8 = {
	facultyName : 'law',
	age : 45
};
let student9 = {
	facultyName : 'economics',
	age : 24
};
let student10 = {
	facultyName : 'ecology',
	age : 54
};

var studensArray = [ student1, student2, student3, student4, student5,
		student6, student7, student8, student9, student10 ];

console.log(studensArray);

function sumPersonAges(sumOfAges, currentObj) {
	return sumOfAges + currentObj.age;
}
var result = studensArray.reduce(sumPersonAges, 1);

console.log(result);

function getFaculty(currentObj) {
	return currentObj.facultyName;
}

var faculties = studensArray.map(getFaculty);
console.log(faculties);
