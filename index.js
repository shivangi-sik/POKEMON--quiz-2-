const chalk= require('chalk')
var readlineSync= require('readline-sync')
var score= 0;
console.log(chalk.bold.bgYellow("NOTE: ONLY TYPE OPTION ALPHABETS AS ANSWER"));
var player= readlineSync.question("enter your name: ");
console.log(chalk.blue("player is: " +player));
var highScore={
  name: "shivangi",
  score: 8,
}
function quiz(ques, ans){
  
  var answer= readlineSync.question(ques);
if(answer.toUpperCase()===ans.toUpperCase())
{
  score++;
  console.log(chalk.green("congratulation! you got it right"));
  console. log(chalk.bgCyan("Your score: " +score));
}else{
  console.log(chalk.red("sorry, you got it wrong"));
  console.log(chalk.bgCyan("Your score: " +score));
}
}
var allQues=[{
  question: "1) Which pokemon researcher in the series is considerd to be the best scientist about pokemon? \n a. Professor Agatha \n b. Professor Oak \n c. Professor Elm--> ",
  answ: "b",
},
{
  question: "2) Which electronic device is used to record and provide info about different species of pokemon? \n a. Pokemon encyclopedia \n b. Poke ball \n c. Pokedex--> ",
answ: "c",
},
{
question: "3) Which of the following pokemon is able to control time? \n a. Palkia \n b. Dialga \n c. Darkai--> ",
answ: "b",
},
{
question: "4) What is the most common type of pokemon? \n a. Water \n b. Grass \n c. Fire--> ",
answ: "a",
},
{
question: "5) Wheezing belongs to which type of pokemon? \n a. Poison \n b. Flying \n c. Normal--> ",
answ: "a",               
},
{
question: "6) Which pokemon is able to mimic others? \n a. Ditto \n b. Jynx \n c. Totodile--> ",
answ: "a",               
},
{
question: "7) How can pikachu evolve into Raichu? \n a. When it reaches level 24 \n b. when it is traded with other trainers \n c. When it is exposed to the Thunder Stone--> ", 
answ: "c",  
},
{
question: "8) Which pokemon would devolve into its previous version? \n a. Slowbro \n b. Xatu \n c. Splash--> ",
answ: "a",
},
{
question: "9) Which pokemon will pupator evolve into? \n a. Larvitar \n b. Jubitar \n c. Tyranitar--> ",
answ: "c",               
 },
 {
question: "10) How many types of pokemon are there? \n a. 15 \n b. 18 \n c. 21--> ",
answ: "b",
}]
for(var i=0; i<allQues.length; i++)
  {
quiz(allQues[i].question, allQues[i].answ)
    console.log(chalk.bold("***************************"));
  }
    console.log(chalk.bold("***************************"));
var currentScore= score;
console.log(chalk.bold("previous highscore= " +highScore.score+ " By " +highScore.name);
if(currentScore>highScore.score)
{
  console.log(chalk.bold("New highscore:" +currentScore+ " achieved by " +player));
  console.log(chalk.bgGreen("Yay! you have beaten the highscore"));
}else{
  console.log(chalk.bold("Your current Score: " +currentScore));
  console.log(chalk.bgRed("Oops!! Couldn't beat the hight score."));
}
