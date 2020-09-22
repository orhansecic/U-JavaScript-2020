//boolean
//var a = true; //1
// var b = false; //0

/*
console.log(1==1);
console.log(1<2);
console.log(5>20);
console.log(true==1);
console.log(1==false);
*/

/*
var myVar;
var myString = "O";

console.log(myVar);
if (myVar){
  console.log("Variable has a value!")
}else {
  console.log("No Value")
}
*/

/*
myFunction();

function myFunction(){
  mySecondFunction();
  function mySecondFunction(){
    myDopple();
    myThirdFunction();

   function myThirdFunction(){
      console.log(b);
    }
  function myDopple(){
    var b = "Radi";
  }
  }
}
*/
/*
var myVar = "Orhan" + true;
console.log(myVar);

var myVar2 = 7 + true;
console.log(myVar2);
*/
/*
var myVar = "Orhan";

for(let x = 0; x<4; x++){
}
if(myVar){
  console.log("Ima Vrijednost " + myVar);
}else {
  console.log("Nema Vrijednost" + myVar);
}

if(x){
  console.log("Ima Vrijednost " + x);
}else {
  console.log("Nema Vrijednost" + x);
}
*/

//Different Ways of Object Initialization





/*
var person = new Object();

person.firstName = "Orhan";
person.lastName = "Secic";
person.education = new Object();
person.age = 22;
person.height = 181;

person.education.primary = "Hasan Kikic";
person.education.middle = "Druga Gimnazija";
person.education.university = "SSST";

console.log(person);
*/

/*
var address = {};

address.street = "Gigim Street";
address.number = 9;

console.log(address);
*/
/*
var osoba = {
  firstName : "Orhan",
  lastName : "Secic",
  age : 22,
  address : {
    street : "Street Example 2",
    town : "Zagreb",
    country : "Croatia",
    zip : 10000,
  },
};
console.log(osoba);

osoba.education = {
  elementarySchool : "Hasan Kikic",
  middleSchool : "Druga Gimnazija",
  university : "SSST",
};
osoba.DOB = null;

var example = JSON.stringify(osoba);
console.log(example);

var exampleObject = JSON.parse(example);
console.log(exampleObject);

function objectFunction() {
  var myVar = "Vrijednost";
  //console.log(newVariable);

};

objectFunction.newVariable = "Jos jedna Vrijednost";

objectFunction();
*/
/*
"Function Statement"

function functionStatement() {
  var a;
  console.log(a);
}

functionStatement();

"Function Expression"

var functionExpression = function(){
  var a;
  console.log(a);
}

functionExpression();

functionExpression.firstName = "Orhan";
functionExpression.myObject = {
  objectProperty : 1,
  objectProperty2 : 2,
}
functionExpression.myFunction = function(){
  var b;
  console.log(b);
}


// Function parameters and Objects

function myFunction(parameter1, parameter2){
  console.log(parameter1 + parameter2);
}

var myObject = {
  number1 : 1,
  number2 : 5,
};

myFunction(myObject.number1, myObject.number2);

function myOtherFunction(a){
  a();
}

var functionVariable = function(){
  console.log("Funkcija je objekat!");
}

myOtherFunction(functionVariable());
*/


/*
//By Value

var a = 3;
var b;

b = a;

console.log(a);
console.log(b);

a = 2;

console.log(a);
console.log(b);







//By Reference

var c = {
  a : "Prva",
};

var d = {};

d = c;

console.log(c);
console.log(d);

c.a = "Druga";

console.log(c);
console.log(d);
*/

/*
var object = {
  a : "Orhan",
  method : function(){
    console.log("Hello, I am a Method!");
  },
  b: "Zarez radi!"
};

console.log(object);
object.method();

function myFunction(){
    var a = "A";
    this.b = "C";
}

myFunction();
*/

console.log(this);

function anonymous() {
  console.log(this);
  anonymousChild();

    function anonymousChild(){
      console.log(this);
      this.proba = "Novi Properti";
    }
}

anonymous();

var object = {
  a : "A",
  b : "B",
  method : function(){
    console.log(this);
    objectChild();

    function objectChild(){

      console.log(this);
    }
  }
};

object.method();
console.log(object);
