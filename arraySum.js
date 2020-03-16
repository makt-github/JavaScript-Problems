



// without reuseability....

var array = [10, 25, 9, 5 ,55, 100, 1, 7, 3] ;

var sum = 0;

for(var i = 0; i < array.length; i++){
    var element = array[i] ;
    sum = sum + element ;
}

console.log("Total Sum: "+sum);



// with reusibility........


function arraySum(input){
    sum = 0 ;
    for(var i = 0; i < input.length; i++){
        var element = input[i] ;
        sum = sum + element ;
    }
    return sum ;
}



var result = arraySum(array);

console.log("Sum: "+result);  


// From Quiz 

var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";

for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames =  allNames + name;
}

console.log(allNames)


