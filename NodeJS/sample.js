console.log(__dirname);
console.log(__filename);



function say(){
	console.log("Hai");
}
say();

var haha=function(){
	console.log("hai");
}
haha();

function lol(fun){
	fun();
}

lol(haha);



var counter=function(arr){

	return arr.length;
	

}
console.log(counter(['HAha','dhckjd','dkjfhoishf']));



var counter=function(a,b){

	return `the value id ${a+b}`;

}

console.log(counter([10+20]));