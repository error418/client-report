function entryFunction() {
	anotherFunction();
}

function anotherFunction() {
	failFunction();
}

function failFunction() {
	fail.now();
}