//1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 



//var Animal = Animal || {};
//Animal.Cat = function() {
//   }
//Animal.Dog = function() {
//}
//2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
//var Cat = {}
//function Dog() {}
    
    // what is that? 
//    = function() {
////      type: 'angry',
////      color: 'grey' 
////}
//
//var Dog = function()

//{
//     this.type: 'angry',
//     this.color: 'grey' 
//}

//3.	Directly underneath, create a new instance of the Dog class.
//function Dog() {}
//var dogVelcro = new Dog (); 

//4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.

//function Animal() {
//    console.log("The Animal has been created");}
//var dogVelcro = new Animal (); 



//5.	Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.

//function Animal(x) {
//    console.log("The Animal has been created");}
//var dogVelcro = new Animal (); 


//6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
//Then, to instantiate the object, you use the following syntax: var variable_name = new function_name(arguments);


//var Animal = function(type, breed, color, height, length){
//    this._type = type
//    this._breed = breed; 
//    this._color = color; 
//    this._height = height; 
//    this._length = length; 
//    }
//var myAnimal = new Animal("dog","pittbull","white",40, 50); 
//console.log(myAnimal); 

//7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

//var Animal = function(type, breed, color, height, length){
//    this._type = type
//    this._breed = breed; 
//    this._color = color; 
//    this._height = height; 
//    this._length = length; 
//    }
//var myAnimal = new Animal("dog","pittbull","white",40, 50); 
//for (x in myAnimal) {window.console.log(myAnimal[x])}; 


//8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.


//var Animal = function(type, breed, color, height, length){
//    this._type = type
//    this._breed = breed; 
//    this._color = color; 
//    this._height = height; 
//    this._length = length; 
//    }
//Animal.prototype.speak = function() {	
//   if (this._type == "dog") {
//       console.log("The " + this._color + " dog is barking!"); 
//       
//   }
//    else if (this._type == "cat") {
//       console.log("The " + this._color + " cat is meowing!"); 
//        }
//}; 
//
//var myAnimal = new Animal("dog","pittbull","white",40, 50); 
//myAnimal.speak(); 

//9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”


//var Animal = function(type, breed, color, height, length) {
//    var _type = type
//    var _breed = breed; 
//    var _color = color; 
//    var _height = height; 
//    var _length = length; 
//    }
//var checkType = function() {
//    if (_type == "dog") {
//        window.console.log("dog"); 
//    }
//    else if (_type == "cat") {
//        window.console.log("cat"); 
//    }    
//    } ; 
//
//this.speak = function(){
//    "use strict"
//   return checkType(); 
//    window.console.log("The " + _type + " has made a noise!");  
//}; 
//
//var myAnimal = new Animal("cat","goodcat", "mix cow paint", 40, 50); 
//window.console.log(myAnimal.speak()); 
	

//10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.

//String.prototype.findWords = function() {
//    var findWords = ""; 
//}

//The Recipe Card (15 points)	
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:

//var recipe = ["ingridient", "ingridient", "ingridient", "ingridient", "ingridient", "ingridient", "ingridient" ]
//
//function f(){
//    for (x in recipe)
//}
//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper
//The Reading List (15 points)
//Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.
