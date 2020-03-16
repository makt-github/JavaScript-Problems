var x = 7 ;
var y = 5 ;

console.log("Before Swap: x =", + x +" and y = "+y);

var temp = x ;
x = y ;
y = temp ;

console.log("After Swap: x=", + x +" and y= "+y);

var name1 =  10;
var name2 = 20 ;

console.log("Before Swap: Name1=", + name1 +" and Name2= "+name2);

/*var temp2 = name1 ;
name1 = name2 ;                  //// to convert 2 string but failed
name2 = temp2 ; 

[name1, name2] = [name2, name1];   */

// Other technique without using third variable

name1 = name1 + name2 ;
name2 = name1 - name2 ;
name1 = name1 - name2 ;




// other one 

var a = 11;
var b = 12;

console.log(a,b);


[a,b] = [b,a];

console.log(a,b);






console.log("After Swap: Name1=", + name1 +" and Name2= "+name2);




