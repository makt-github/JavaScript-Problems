
// Checked an array for containing value both max and min......

var marks = [97, 96, 29, 52, 40, 55, 38, 65, 75, 95, 60, 42] ;

var max = marks[0];
var min = marks[0];

for( var i = 0; i < marks.length; i++){
    
    var element1 = marks[i];
    var element2 = marks[i];

    if(element1 > max ){
        max = element1 ;
         
     }
      if(element2 < min){
        min = element2 ;
     }
}

console.log("Highest Marks Obtained: "+max);
console.log("Lowest Marks Obtained: "+min);