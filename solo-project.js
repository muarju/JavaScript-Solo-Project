//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test ="This is a variable"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum=10+20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random=Math.floor(Math.random() * 20)
console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me={
    name: "Muslim Uddin",
    surname: "Arju",
    age:25
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
me.skills=['HTML','CSS','JavaScript','Rect','PHP']
console.log(me)
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
me.skills.pop()
console.log(me)

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
const dice =()=> Math.floor((Math.random()*6)  + 1)
console.log('Ex 1',dice())
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
const whoIsBigger=(a,b)=> a>b ? a : b
console.log('Ex 2',whoIsBigger(6,2))

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
const splitMe=(str)=> str.split(" ")
console.log('Ex 3',splitMe("I love coding"))


/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
const deleteOne=(str,boolean)=> boolean ? str.substring(1) : str.substring(0,str.length-1)
console.log('Ex 4',deleteOne("Stive",true))
console.log('Ex 4', deleteOne("Stive",false))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
function onlyLetters(str){
    let words =str.split(' ')
    let result="";
    words.forEach(word => {
        let currentLatter=word.split('')
        if(isNaN(currentLatter)){
            result += currentLatter+ ' '
        }
    });
    return result
} 
console.log('Ex 5',onlyLetters("I have 4dogs"))

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
function isThisAnEmail(str){
 let re=/\S+@\S+\.\S+/;
 return re.test(str);
}
console.log('Ex 6',isThisAnEmail("mdarju@gmail@com"))// return false
console.log('Ex 6',isThisAnEmail("mdarju@gmail.com"))// return true


/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
function whatDayIsIt(){
  let date= new Date().getDay();
  switch(date){
    case 0: date="Sunday"
    break;
    case 1: date="Monday"
    break;
    case 2: date="Tuesday"
    break;
    case 3: date="Wednesday"
    break;
    case 4: date="Thrusday"
    break;
    case 5: date="Friday"
    break;
    case 6: date="Saturday"
    break;
    default:
    break;
  }
  return date;
}
console.log('Ex 7',whatDayIsIt())


/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
function RollTheDices(num){
  let ssum=0
  let value=[]
  for(let i=0;i<num;i++){
   let d = dice()
    ssum +=d
    value.push(d)
  }
  return {
    sum:ssum,
    values:value
  }
}
console.log('Ex 8',RollTheDices(3))

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
function howManyDays(date){
  let today = new Date(), givendate= new Date(date),date1=givendate.valueOf(),date2=today.valueOf()
  let numberOfDays = (date2 - date1) / 1000 / 86400;
  return numberOfDays = Math.round(numberOfDays - 0.5);
}
console.log('Ex 9',howManyDays("2021-07-25"), "Days passed")

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
const isTodayMyBirthday=(date) => date=='1995-09-28' ? true : false
console.log('Ex 10',isTodayMyBirthday('2020-05-22')) //return false
console.log('Ex 10',isTodayMyBirthday('1995-09-28')) //return true

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!
/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]


/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
function deleteProp(obj,str){
  delete obj.str
  return obj
}
console.log('Ex 11',deleteProp(me,'age'))

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
const olderMovie=()=> movies.filter(movie => movie.Year>2000)
console.log('Ex 12',olderMovie())

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
const countMovies=()=> movies.length
console.log('Ex 13',countMovies())

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
const onlyTheTitles = () => movies.map(movie=> movie.Title)
console.log('Ex 14',onlyTheTitles())

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
const onlyInThisMillennium=()=> movies.filter(movie => movie.Year>1999)
console.log('Ex 15',onlyInThisMillennium())

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
const getMovieById=(id)=> movies.filter(movie => movie.imdbID==id)
console.log('Ex 16',getMovieById('tt0848228'))

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
function sumAllTheYears () {
  let result = 0
  for(let i = 0; i < movies.length; i++){
      result += parseInt(movies[i].Year)
  }
  return result
}
console.log('Ex 17',sumAllTheYears())


/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
const searchByTitle=(keyword)=> movies.filter(movie => movie.Title.includes(keyword))
console.log('Ex 18',searchByTitle('Lord'))

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
function searchAndDivide(keyword){
  let result = {
      match: [],
      unmatch: []
  }
  for(let i = 0; i < movies.length; i++){
      if (movies[i].Title.indexOf(keyword) !== -1)
          result.match.push(movies[i])
      else
          result.unmatch.push(movies[i])
  }
  return result
}   
console.log('Ex 19',searchAndDivide('Lord'))

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
const removeIndex = (index)=> movies.filter((movie, i) => !(i===index))
console.log('Ex20',removeIndex(3))


// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
function halfTree(height){
  for (let i = 0; i < height; i ++){
    let toPrint = ""
    for (let j = 0; j < i + 1; j++) {
        toPrint += "*"
    }
    console.log(toPrint)
  }
}
console.log('Ex 21')
halfTree(3)

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
function tree(height){
  for (let i = 0; i < height; i++){
    let stars = "*".repeat(2 * i +1)
    let spacesBefore = " ".repeat(height - i - 1)
    console.log(spacesBefore + stars)
  }
}
console.log('Ex 22')
tree(3)

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
const isItPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
console.log('Ex 23',(isItPrime(6))) //return false
console.log('Ex 23',(isItPrime(5))) //return true