//  1| what is variable =  variable a just 1 ta man dawya jai 

var my_name = "rafi";
console.log(my_name);


//////////////////////////////////////////////////////

//  2| what is array  =   array te onek man ekshate dawya jai

var all_my_friends = ['rafi', 'kafi', 'mafi'];
console.log(all_my_friends);
//////////////////////////////////////////

// amar jodi 3rd friend er nam jana lage tokhon 
var  thirdfriend = all_my_friends [2]
console.log(thirdfriend);

////////////////////////////////////////

// 3| conditionals ta ki = eta na hoile ota ota na hoile arek ta arek ta na hoile onno ta 
//  conditional = if , else if , else diye kora hoi 
// conditionals = > , < , <= ,>= , == , === !=

var colors = "red" ;

if(colors == "black"){
    console.log("black color valo lage");
}
/////////////////////////////////////////////////////////////////////

else if(colors == "red"){
    console.log("red colors valo lage") ;
}
//////////////////////////////////////////////////////////////////
else{
    console.log("kiser red kiser black taka nai bari gelam ")
}
///////////////////////////////////////////////////////////////////


// 4| loop = loop 2 pokar (while loop , for loop )

//  this is while loop 
var numbers = 0 ;
while (numbers <= 5){
    console.log(numbers)
    numbers = numbers +1
}
// ////////////////////////////////////////////

// this is for loop 
// while loop for loop pri ek (for loop while loop er short cart)
for( var points = 0 ; points <= 10 ; points++){
    console.log(points)
}

/// 5 | object  ki = kono kichur bornona 

var  phone = {
    phoneBrand : "samsung" ,
    price : 30000 ,
    color: "red",

}
console.log(phone);

