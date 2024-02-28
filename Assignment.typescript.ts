//  Question : 01  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


let person_name = "Muqadus";
let message_to_person = `Hello ${person_name} , Do you want to learn some python today?`;
console.log(message_to_person);


//  Question : 02  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let indivisual_name = "Muqadus";

let lowercase = indivisual_name.toLowerCase();        // Name in lowercase.
console.log(lowercase);

let uppercase = indivisual_name.toUpperCase();       // Name in uppercase.
console.log(uppercase);

let titlecase = indivisual_name.toString();          // Name in titlecase.
console.log(titlecase);


// Question : 03  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:


let author_name : String = "Mark Twain once said";
let quote       : string = "\" Focus more on your desire than on your doubt, and the dream will take care of itself. \"";

console.log(author_name + "," +quote);


// Question : 04  Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person : string = "Salena gomez";
let $message : string = "Hello";
console.log($message + " " + famous_person);


// Question : 05  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let Name_ =  "\t \n Nayab \n \t";
console.log(Name_);

// Question : 06  Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//  Addition
let x = 4;
let y = 4;

console.log(x + y);

//  Subtraction
let a = 10;
let b = 2 ;

console.log(a - b);

//  Multiplication
let c = 4;
let d = 2;

console.log(c * d);

//  Division
let r = 24;
let s = 3 ;

console.log(r / s);


// Question : 07  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message


let Favorite_number : number = 21;
let Number_reveal : string = "My favorite number is ";

console.log(Number_reveal + Favorite_number + "." );


// Question : 08  Adding Comments

// We add comments by adding two slash at the begining of the sentence. We do so , for the clearness of the code.


// Question : 09  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friend_names : string[] = ["Sadaf"  ,  "Saira"  ,  "Hadiqa"];

console.log(friend_names[0]);
console.log(friend_names[1]);
console.log(friend_names[2]);


// Question : 10  Greetings: Start with the array you used in Exercise 09, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Message = "Hello";
console.log(Message  + " " +friend_names[0]);
console.log(Message  + " " +friend_names[1]);
console.log(Message  + " " +friend_names[2]);


// Question : 11  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle

let transportation_list  = ["Bmw"  ,  "Tesla"   ,  "Private Jet"  ,  "Rolls-Royce "];

for(let transportation of transportation_list){
    console.log(`I would like to own a ${transportation}`+".")
};

// Question : 12  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let guests_list = ["Sadaf"  , "Saira"  , "Hadiqa"];

for (let invite of guests_list){console.log(` ${invite}, I'm throwing a party this Sunday at 10 pm! Feel free to stop by.`)};


// Question : 13  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite

guests_list[2] = "Aliya"     //Unfortunately, hadiqa can't make it. so , I am inviting Aliya.

for (let invitation of guests_list){console.log(` ${invitation} I'm throwing a party this Sunday at 10 pm! Feel free to stop by`)};


// Question : 14  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.


let message__ = "I found a bigger dinner table. So , now I am inviting more peoples.";
console.log(message__);


//• Add one new guest to the middle of your array. • 

let new_guest = (guests_list.length / 2);
guests_list.splice(new_guest, 0, "Nayab");
console.log(guests_list);

//• Add one new guest to the beginning of your array.


guests_list.unshift("Taniya");
console.log(guests_list);


//• Add one new guest to the end of your array.

guests_list.push("Priya");
console.log(guests_list);

//Print a new set of invitation messages, one for each person in your list.
for (let Guests of guests_list ){
    console.log(`${Guests} , I am throwing a party at my home on sunday`)
};

//15. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let _Message_ = " New dinner table won’t arrive in time for the dinner,and I have space for only two guests.";
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

console.log(guests_list.pop() + " ," + "I am sorry I can't invite you");
console.log(guests_list.pop() +  ","   +"I am sorry I can't invite you");
console.log(guests_list.pop() +  ","    +"I am sorry I can't invite you");
console.log(guests_list.pop() +  ","    +"I am sorry I can't invite you");


//• Print a message to two people still on your list, letting them know they’re still invited.
let msg = `${guests_list[0]} ,You are invited `;
let msg_ = `${guests_list[1]} , You are invited `;
console.log(msg);
console.log(msg_);


// Question : 16 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let index_error = ["Aliya" , "Altaf"];
let message = "Goodbye";
console.log(index_error[2] + message );

//corret form
console.log(index_error[1] +  " "+message);


// Question : 17 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const bio_data = {
    Name : "Muqadus",
    Age : 17
};
console.log(bio_data);
//Question : 18 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//et car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car = "bmw";
if(car == "bmw"){console.log("I PREDICT TRUE")};
let house = "Flat";
if(house == "flat"){console.log("I PREDICT TRUE")};
let animal = "donkey";
if(animal == "donkey"){console.log("I PREDICT TRUE")};
let dish = "Pasta";
if(dish == "pasta"){console.log("I PREDICT TRUE")};
let Name ="Iqra";
if(Name == "Iqra"){console.log("I PREDICT TRUE")};
let grade= "Pass";
if(grade == "Pass"){console.log("I PREDICT TRUE")};
let number = "eleven";
if(number == "eleven"){console.log("I PREDICT TRUE")};
let time = "Five";
if(time == "five"){console.log("I PREDICT TRUE")};
let cloth = "Shirt";
if(cloth == "shirt"){console.log("I PREDICT TRUE")};
let object = "table";
if(object == "Table"){console.log("I PREDICT TRUE")};


//Question : 19 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings
let cast = "butt";
if(cast == "butt"){
    console.log("True")
  }
  else{console.log("False")
  
  };
  if(cast == "Butt"){
    console.log("True")
  }
  else{console.log("False")
  
  };
  if(cast !== "khan"){
    console.log("True")
  }
  else{console.log("False")
  
  };
  if(cast !== "butt"){
    console.log("True")
  }
  else{console.log("False")
  
  };


// Tests using the lower case function
let player1 = "kainat";
if(player1 === "kainat"){
  console.log("True")
}
else{console.log("False")

};
let player2 = "Abrahim";                              //answer is coming true check
if(player2 ==="Abrahim"){console.log("True")} else {               
    console.log("False")
};
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let value = 90;
if(value == 90){console.log("True")}
else{console.log("False")};

if(value == 30){console.log("True")}
else{console.log("False")};

if(value !== 50){console.log("True")}
else{console.log("False")};

if(value !== 90){console.log("True")}
else{console.log("False")};

if(value < 100){console.log("True")}
else{console.log("False")};

if(value < 40){console.log("True")}
else{console.log("False")};

if(value > 40){console.log("True")}
else{console.log("False")};

if(value > 100){console.log("True")}
else{console.log("False")};

if(value >= 90){console.log("True")}
else{console.log("False")};

if(value >= 200){console.log("True")}
else{console.log("False")};

if(value <= 90){console.log("True")}
else{console.log("False")};

if(value <= 50){console.log("True")}
else{console.log("False")};


//• Tests using "and" and "or" operators
let age_ = 14
if(age_ >= 10 && age_ <= 20){console.log("True")}
else { console.log("False")};

if(age_ >=60 || age_  >=70){console.log("True")} else{
    console.log("False")
};
//• Test whether an item is in a array
let Items_ = ["Cheese" , "Milk" , "Pizza"]
if(Items_.includes("Milk")){
    console.log("True")}else { console.log("False")};


//• Test whether an item is not in a array
if(Items_.includes("Chicken")){
    console.log("True")
} else(
    console.log("False")
);

//Question : 20 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let msg_to_guests = "I am inviting 2 peoples.";

//• Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits_ :string[]= ["Apple" ,"Papaya" ,"Apricot"];
console.log(favorite_fruits_);

//Question : 21 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let favorite_fruits = [ "Apple" , "Mango" ,"Papaya" ,"Apricot"];

if(favorite_fruits.includes("Mango")){
    console.log("Mango is in the list")
};

if(favorite_fruits.includes("Cherry")){
    console.log("Cherry is in the list")
};

if(favorite_fruits.includes("Orange")){
   console.log("Orange is in the list")
};


// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let Favorite_fruits = ["Apple" ,"Banana" ,"Grapes" , "kiwi" ,"Muskmelon"] ;

let check_fruit = "Banana" ;
if (Favorite_fruits.includes(check_fruit)){
    console.log("I really like bananas")

} else {
    console.log("Banana is not in the list")
}



let check_fruit_ = "Muskmelon";
if(Favorite_fruits.includes(check_fruit_)){
    console.log("I like Muskmelon")
} else{
    console.log("Muskmelon is in the list")
};


let check__fruit = "Watermelon";
if(Favorite_fruits.includes(check__fruit)){
    console.log("I really like watermelon")
}else{
    console.log("Watermelon is not in the list")
};


let _check_fruit = "Strawberry";
if(Favorite_fruits.includes(_check_fruit)){
    console.log("I extremely like strawberry")
} else {
    console.log("Sorry ! strawbwrry is not in the list")
};

let __check_fruit = "Blueberry";
if(Favorite_fruits.includes("Blueberry")){
    console.log("Blueberry is my favorite fruit.")
} else{
    console.log(
        "Blueberry is not include in the list"
    )
};




//Question : 22 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

let current_users : string[] =  ["Aliya" ,"Hamza" ,"Kainat" ,"Taniya" ,"Waseem"];

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users : string[] = ["Iqra" ,"Falak" ,"Asghar" , "Waseem","Nofil","Aliya" ];


for (let i = 0; i < new_users.length; i++) {
let lowercase_new_user = new_users[i].toLowerCase();

if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
console.log(`Username '${new_users[i]}' is not available. Please enter a new username.`)
} else {
console.log(`Username '${new_users[i]}' is available.`)
}
};

//Question : 23. No Users: Add an if test to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

// Array of users
let users: string[] = [];

if (users.length === 0) {
    console.log("We need to find some users!")
} else {
    console.log("List of users:");
    for (let user of users) {
        console.log(user);
    }
};

// Remove all usernames from the array
users = [];

// Check if the list of users is not empty after removal
if (users.length === 0) {
    console.log("Now the list of users is empty.");
} else {
    console.log("List of users after removal:");
    for (let user of users) {
        console.log(user);
    }
}



//Question : 24. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.\
let username_ = ["taniya" , "john" ,"eric" ,"admin", "kiran"];
for (let username of username_) {
if (username.toLowerCase() === 'admin') {
  console.log("Hello admin, would you like to see a status report?");
} else {
  console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


//Question :25 . Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!                    


let pizza = ["Tikka" ,"Pepperoni" ,"Chesse" ];
console.log(pizza);


for(let pizaas of pizza){
    console.log(`I like ${pizaas} pizza`)
};





//Question : 26 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals = ["Cat" , "Dog" ];
 for (let animal of animals){
    console.log(animal)
 };


for(let animal_ of animals){
    console.log(`A ${animal_} would be a great pet`)
};

//Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

console.log("cat and dog both have sharp teeth , both are most widely kept pet animals , and both eat meat.");


// Question :27 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt( size : string, message : string)
{console.log(`The shirt is of size ${size}, and the message printed on the shirt is ${message}.`)}
make_shirt("small " , "Stay happy");


// Question : 28 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 
function make_shirts( size_ : string = "large" , message :string = "I love typescript" ){
    console.log(`size = ${size_} "," message = ${message}` )
};
make_shirts();
make_shirts("medium");
make_shirts("Extra small" , "Vibe");


//Question : 29 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. //Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city( City :string = "" , country:string = "Pakistan"){console.log(`${City} is in ${country}`)}

describe_city("karachi");
describe_city("islamabad");
describe_city("Dehli" ,"India");


// Question : 30 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(Name_ofcity :string ="" ,Name_ofcountry :string = ""){console.log(`${Name_ofcity}  ${Name_ofcountry}`)};

city_country("\"Seoul , South Korea\"");
city_country("\"Peshawar , Pakistan\"");
city_country("\"Tokyo  , Japan\"");


//Question : 31 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_names = ["Atif" ,"Adrian" ,"Tom"];
function magicians(x :string[] = magician_names){console.log(`${magician_names}`)}
magicians();

// Quesytion : 32 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


let Sandwhich = ["Cheese","Tomato","Chicken" ];

function Order (...items : string[]){
    console.log(`The sandwich which is being order contains ${items}`)}
Order("Cheese","Tomato","Chicken patty","Onion");
Order("Sauce" , "Beef patty" , "onion");
Order("Cheese ", "patty");

// Question : 33    Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
let Person_name =  "\t \n Nayab \n \t";
console.log(Person_name)

// Questio : 34  Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.

let age = 17;
if ( age < 2) {
    console.log("The person is a baby")};

if (age >= 2 && age < 4 ){
    console.log("The person is a toddler")
};
 if( age >= 4 && age < 13){
    console.log("The person is a kid")
 };

 if ( age >= 13 && age< 20){
    console.log("The person is teenager")
 };
if ( age >= 20 && age < 65){
    console.log("The person is adult")
};
if ( age >= 65){
    console.log("The person is elder")
};

// Question : 35  Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_Color: string[] = ["green", "red", "yellow"];

if (alien_Color.includes("green")) {
    console.log("Player just earned 5 points.");}


// Question : 36  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

let alien__Color: string[] = ["pink", "red", "yellow"];
if(alien__Color.includes("green")){
    console.log("Player just earned 5 points")

}
else if(alien__Color.includes("pink")){
    console.log("Player just earned 10 points")
}

// Question : 37  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.

let alien_Colors: string[] = ["pink", "red", "yellow"];
if(alien_Colors.includes("green")){
    console.log("Player just earned 5 points")

}
else if (alien_Colors.includes("yellow")) { console.log("Player just earned 10 points")}

else if(alien_Colors.includes("red")) { console.log("Player just earned 15 points")
}


//	Question : 38. Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places = ["China" , "Japan" , "South korea" , "Singapore" , "Thailand"]


console.log(places);

console.log([...places].sort());

console.log(places);

console.log([...places].sort().reverse());

console.log(places);

places.reverse();

console.log(places);

places.reverse();

console.log(places);

places.sort();


console.log([...places].sort().reverse())


// Question : 39  Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.



interface Album {
    artist: string;
    title: string;
    tracks?: number;
}
function album(artist: string, title: string, tracks?: number){
    console.log(`artist : ${artist} , title :${title} , tracks : ${tracks}`)
}
album("Taylor Swift" , "Lover" , 4)
album("Salena Gomaz" , "Rare" , 13)

// Question : 40  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians_name: string[] = ["Harry Houdini", "Criss Angel"];

function show_magicians(names: string[] = magicians_name) {
    console.log("The names of the magicians are:");
    names.forEach(name => {
        console.log(name);
    });
}

show_magicians();

//Question : 41  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians_name_: string[] = ["Harry Houdini", "Criss Angel"];

function make_great(names: string[] = magicians_name_) {
console.log("The great magicians are:");
let magician= names.map(name => "the Great " + name);
console.log(magician);
}

make_great();

// Question : 42  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.







// Question : 43  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
let number = numbers[i];
switch(number) {
case 1:
console.log("1st");
break;
case 2:
console.log("2nd");
break;
case 3:
console.log("3rd");
break;
default:
console.log(number + "th");
break;
}}


//Question : 44 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let cities_ = ["Karachi" , "Islamabad" , "Lahore" , "Hyderabad" , "Gujrat"]
console.log(`List of cities is ${cities_}`)


