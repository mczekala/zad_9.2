var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var names = femaleNames.concat(maleNames);
var names2 = names.slice();
var newName = 'Marian';
if (names2.indexOf(newName) === -1) {
	names2.push(newName);
}
console.log(names);
console.log(names2);

var names3 = names.filter(function(name) {
    return name[0] == "M";
});
console.log(names3);

var names4 = names.filter(function(name) {
    return name.length > 5;
});
console.log(names4);

var out=0;
for(var k=0;k<names.length;k++){
	var len = names.map(function(x) {
    	return x.length;
	});
	out=out+len[k];
}
console.log(out);

var names5 = names.map(function(x) {
    return x+" "+x.length;
});
console.log(names5);

var names6=names.reverse();
console.log(names6);

var names7=[];
for(var y=1;y<4;y++){
	names7.push(names[y]);
}
console.log(names7);

var names8=names.sort();
console.log(names8);

var names9 = names.filter(function(name) {
    return name[0] == "K";
});
console.log(names9);