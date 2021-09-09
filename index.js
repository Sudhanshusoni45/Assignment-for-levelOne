var readlineSync = require('readline-sync');
var userName = readlineSync.question('Greetings what is your name? ')

var score = 0;

console.log("Welcome " + userName + " here's a quiz,\nlet us see how well do you know our solar system, answer right and earn points\n");

console.log('Here are your questions :')

var questionOne = {
  question : 'what is the nearest planet to earth ? ',
  answer : 'mercury'
}

var questionTwo = {
  question : 'which is the biggest Planet in our solar system? ',
  answer : 'jupiter'
}

var questionThree = {
  question : 'which is the closest star to us? ',
  answer : 'sun'
}

var arr = [questionOne,questionTwo,questionThree]



function play(question,answer)
{ 
  var userAns = readlineSync.question('\n'+ question)
  
  if(userAns===answer){
    console.log('you are right')
    score++;
  }
  else{
    console.log('you are wrong')
    score--;
  }
  console.log('your score is '+ score)
}

for(i=0;i<arr.length;i++)
{
  play(arr[i].question,arr[i].answer)
}