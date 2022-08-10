//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here
const favRecipe = {
  title: "Copycat Vegetarian Taco Bell Bowl",
  servings: 2,
  ingredients: [
    "tortilla wraps (soft)",
    "refried beans",
    "rice",
    "salad mix",
    "tomatoes",
    "shredded cheese (of your choice)",
    "sour cream",
    "salsa",
    "guacamole",
    "chili beans",
    "avocado (sliced)",
    "crunchy tortilla chips (crumble on top)",
    "lime, salt, & pepper (add to taste)",
    "(optional) tabasco sauce for some extra hotness!",
  ],
};

console.log(favRecipe.title);
console.log("Serves:", favRecipe.servings);
console.log("Ingredients:");
for (let i = 0; i < favRecipe.ingredients.length; i++) {
  console.log(favRecipe.ingredients[i]);
}

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here
const books = [
  {
    title: "Moby Dick",
    author: "Herman Melville",
    alreadyRead: true,
  },
  {
    title: "Stuart Little",
    author: "E.B. White",
    alreadyRead: true,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    alreadyRead: false,
  },
];
// let bookInfo = " ";
// function printBook(obj) {
//   for (let i = 0; i < obj.length; i++) {
//     bookInfo = obj[i].title + " by " + obj[i].author;
//     console.log(bookInfo);
//   }
// }
// printBook(books);
let bookInfo = " ";
function printBook(obj) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].alreadyRead === true) {
      bookInfo = `'You already read "${obj[i].title}" by ${obj[i].author}.'`;
      console.log(bookInfo);
    } else {
      bookInfo = `'You still need to read "${obj[i].title}" by ${obj[i].author}.'`;
      console.log(bookInfo);
    }
  }
}
printBook(books);
