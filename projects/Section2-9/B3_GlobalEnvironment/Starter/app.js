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

//console.log(person);
person.example = {};
person.example.ime = "Kerim";
//console.log(person.example.ime);
person.prototype = {};
person.prototype.primjer = "Pogodak";

console.log(person.primjer);
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

osoba.education = {
  elementarySchool : "Hasan Kikic",
  middleSchool : "Druga Gimnazija",
  university : "SSST",
};
osoba.DOB = null;

console.log(osoba);

var jsonOsoba = JSON.stringify(osoba);
console.log(jsonOsoba);

console.log(JSON.parse(jsonOsoba));
*/

/*
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


//Functions are Objects
/*
function main(){
  var english = "Hello";
  var spanish = "Hola";
  var bosnian = "Zdravo"

  console.log(english + " " + main.ime);
  console.log(spanish + " " + main.ime);
  console.log(bosnian + " " + main.ime);


  console.log(main.ime);
};
main.ime = "Orhan";
main();
*/
/*
"Function Statement"

function functionStatement() {
  var a;
  console.log(a);
}

functionStatement();
*/
/*
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
*/
/*
var foo = function (ime = "Timur"){
  var english = "Hello, ";
  var spanish = "Holla, ";

  console.log(english + ime);
  console.log(spanish + ime);
  console.log(foo.bosnian + ime);
  foo.foo2();
};
foo.bosnian = "Zdravo, ";
foo.foo2 = function(){
  console.log("Pa ovo radi!")
};
foo("Orhan");
*/

/*
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




//THIS KEYWORD
/*
var a = "Orhan";

example();
function example(){
  example2();
    function example2(){
      this.b = "Timur";
      this.a = "Kerim";
    }
};

var object = {
  ime : "Mirela",
  prezime : "Secic",

  method : function(){
    console.log(this);
    var pointer = this;
    stepBrother();
    function stepBrother(){
      console.log(pointer);
    }
  }
}
*/


/*
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
    var praviThis = this;
    objectChild();


    function objectChild(){
      console.log(praviThis);
      console.log(this);
    }
  },
};

object.method();
console.log(object);
*/
/*
console.log(this);

function a(){
  console.log(this);
  c()
  function c(){
    console.log(this);
  }
}

var b = function(){
  console.log(this);
}

a();
b();
*/
/*---------------------*/
/*
var object = {
  a : "property",

  method : function(){
    console.log(this);
    var objThis = this;
    funkcijaMetode();



      function funkcijaMetode(){
        console.log(this);
        console.log(objThis);
      }
  }
}

console.log(object);
object.method();
*/


/* Arrays */

/*
var array = [
  1,

  "Orhan",

  true,

  {
    name: "Timur",
  },

  function Greeting(name){
    var greeting = "Hello ";

    console.log(greeting + name);
  },
];

array[4](array[1]);

array[4](array[3].name);
console.log(array.length);
*/

/* Arguments */

/*
function Greeting(firstname, lastname = "Kotromanic", age = "98", language = "BOS"){

  if(arguments.length >= 4){

  console.log(firstname);
  console.log(lastname);
  console.log(age);
  console.log(language);
  console.log("------------");

  }else {
    console.log("There are not enough arguments passed.")
  }
};
Greeting("Orhan");
Greeting("Orhan", "Secic");
Greeting("Orhan", "Secic", 22);
Greeting("Orhan", "Secic", 22, "bosnian");
*/

/* Return */
/*
function returnExample(){

  var a = "Orhan";
  var b = "Timur";

  console.log(a + " and " + b + " are brothers");

  var c = "Huba Buba";

  return c;

}

console.log(returnExample());

var object = {
  a: 21,
  b : 22,
  }
*/

/* Immediately Invoked Function Expressions */

/*
var firstName = "Orhan";

(function (name) {
  var greeting = "Zdravo ";

  console.log(greeting + name + "e");

})(firstName);

*/

/* Typeof operator and parseInt */

/*
var a = window.prompt("Enter a value");
var b = window.prompt("Enter a value");

if(typeof a === "undefined" || "NaN" || "Null" && typeof b === "undefined"){
  console.log("A or B do not have values");
}else (example(parseInt(a, 10), parseInt(b, 10)));

function example(a, b){
  console.log(a + b);
}
*/

/* for loop */
/*
console.log("It Works!");

var even = " ";
var odd = " ";
for ( let x = 0; x<=10; x++){
  if( x % 2 === 0){
    even =even + x + ", ";
  }else{
    odd = odd + x + ", ";
  }
}
console.log("Even numbers are: " + even);
console.log("Odd numbers are: " + odd);
*/

/* Video 45. */
/*
var greeting = "Zdravo!";

(function (name) {
  var greeting = "Hello,";
  greeting = "Đes ba,";
  console.log(greeting + " " + name);

}("Orhan"));

console.log(greeting);
*/

/* Coersion */
/*
var string = "12";
var number = 12;
var boolean = true;
*/
//console.log(string + number); -> 1212
//console.log(string + boolean); -> 12true
//console.log(number + boolean); -> 13

/* Closures */
/*
function main(greeting){

  return function(firstname, lastname){
    if(greeting === "en"){
      return console.log("Hello, " + firstname + " " + lastname);
    };
    if(greeting === "es"){
      return console.log("Hola, " + firstname + " " + lastname);
    };
  };
};

var foo = main("en");
var foo1 = main("es");

foo("Orhan", "Secic");
foo1("Timur", "Secic");
*/

/* Callback Functions */
/*
function main(callback, callback2){
  callback();
  callback2();
};

var foo = function(){
  console.log("I am a callback function.");
};

main(foo, function(){
  console.log("I am also a freaking callback function.");
});
*/
/* setTimeout function */
/*
var timer = setTimeout(function(){
  console.log("Delayed message");
}, 2000);
console.log(timer);
*/

/* bind() method */
//var ime = "Timur";
//var prezime = "Doe";
/*
var object = {
  ime : "Orhan",
  prezime : "Secic",
  fullname : function(){
    return ("My name is " + this.ime + " " + this.prezime);
  },
};
//Executing in the object and then saving the value outside of the object.
var inside = object.fullname();
console.log(inside);
console.log("++++++++++++++++");
// Executing outside without the bind method.
var outside = object.fullname;
console.log(outside());
console.log("++++++++++++++++");
// Executing outside of the object but using the bind method to connect to the object again
var final = object.fullname;
console.log(final());
var foo = final.bind(object);
console.log(foo());
*/

/* call() method */
/*
var object = {
  fName : "Timur",
  lName : "Secic",
}

var object2 = {
  fName : "Orhan",
  lName : "Kenjavac",
}

function example (language){
  console.log("My name is " + this.fName + " " + this.lName + " in " + language);
}

example.call(object, "English");
example.call(object2, "Spanish");
*/

/* Functional Programming */
/*
var array1 = [1, 2, 3];
var foo = [3, 4, 5];

function modArray(arr, fn, ime){
  var dArray =  [];

  if(ime === "d"){
  for(i = 0; i<arr.length; i++){
    dArray.push(double(arr[i]));
  };
}else if(ime === "t"){
  for(i = 0; i<arr.length; i++){
    dArray.push(triple(arr[i]));
  };
}else{
  console.log("The Fuck");
};
return dArray;
}

function double(index){
  return index * 2;
};
function triple(index){
  return index * 3;
};

console.log(modArray(array1, triple, "t"));
*/
/* Functional Programming - Example from the Video */
/*
var array = [1, 2, 3];
var array2 = [];
var foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mapArray(full, empty, fn){

  for(let i = 0; i<full.length; i++){
    empty.push(fn(full[i]));
  }
}
function popArray(array){
  var length = array.length;
  for(let i = 0; i < length; i++){
      array.pop();
  }
}

mapArray(array, array2, function(item){
  return item * 2;
})
console.log(array2);
console.log("+++++++++++++");

console.log(foo);
popArray(foo);
console.log(foo);
*/
/*
var array1 = [1, 2, 3, 4];
var array2 = [];
var ime = "Orhan";

var equal = function(full, empty, fn){

  for(let i = 0; i<full.length; i++){
    empty[i] = (fn(full[i]));
  };
};

equal(array1, array2, function(item){
  return item * 2;
});
console.log(array2);

var greaterTwo = equal(array1, array2, function(item){
  return item >2;
});
console.log(array2);
*/
/*
var greeting = "Olla ";
var object = {
  ime : "Orhan",
  prezime : "Secic",
  greeting : "Hello, ",
}

function Greeting(example){
  console.log(this.greeting + this.ime + " " + this.prezime + " ," + example);
};
Greeting.call(object, "primjer");
Greeting.apply(object, ["primjer"]);
var foo = Greeting.bind(object);
foo("primjer");
*/

//Inheritance - Prototypal Inheritance
var object = {
  firstName : "John",
  lastName : "Doe",
};

var object2 = {
  firstName : "Orhan",
  lastName : "Secic",
  method : function(){
    return this.firstName + " " + this.lastName
  },
};

var object3 = {
  foo : "Example",
  funkcija : function(){
    return "Zdravo";
  },
};

object.__proto__ = object2;
object.__proto__.__proto__ = object3;

console.log(object.foo);

/*
var array = [];
console.log(array);
console.log(array.__proto__);
console.log(array.__proto__.length);
console.log(array.length);
*/
object.firstName = "Kerim";
console.log(object.firstName);
