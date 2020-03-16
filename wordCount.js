//Count  the words with in a string........


var speech = "My name is Tayef. I   have been studying CS at MU.";

var x = speech.length ;
console.log(x);
console.log(speech[1]);

// whole letter count...

/*
for(var i = 0; i < speech.length; i++){
    var letter = speech[i] ;
    console.log(letter);
}
*/

// count total words...... 

var word = 0;
for(var i = 0; i < speech.length; i++){
    var element = speech[i];

    if(element == " " && speech[i-1] != " "){
        word++ ;
    }
}

word++ ;

console.log("Total Word: "+word);