

// To remove dublicate entry to an array......

var array1 = [4, 5, 2, 4, 9, 15, 3, 2, 5, 14, 6, 7] ;
var array2 = [];

for(var i = 0; i < array1.length; i++){
    var element = array1[i] ;
    var index = array2.indexOf(element);

    if(index == -1){
        array2.push(element);
    }
}

console.log("Array with Duplicate Entry: "+array1);
console.log("Array without Duplicate Entry: "+array2);