// Revesre A String....





function reverseString(str){
    var reverse = "" ;

    for(var i = 0; i < str.length; i++){
        var char = str[i] ;
        reverse = char + reverse ;
    }

    return reverse ;
}

var voice = "Helllo World We are Allien Coming Soon.";

var output = reverseString(voice);

console.log("Current String: "+voice);
console.log("Reverse String: "+output);


// By a single line

var rev = voice.split('').reverse().join('');
console.log(rev)