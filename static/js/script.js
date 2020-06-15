// challenge 1: your age in days 

function ageInDays(){
 var birth_year = prompt('What year you born ...?');
var ageInDays = (2020 - birth_year)*365;
var h2 = document.createElement('h2');
var textAnswer = document.createTextNode("you are " +ageInDays+" days old")
h2.setAttribute('id','ageInDays');
h2.appendChild(textAnswer);
document.getElementById('flext-box-result').appendChild(h2);
}

function reset(){
document.getElementById('ageInDays').remove();
}

// challenge 2: Generate cat
function generateCat(){
var image = document.createElement('img');
var div = document.getElementById('flex-cat-generator'); 
image.src = "static/image/cat.gif";
div.appendChild(image);
}

// challenge 3: Rock, Paper, Scissors

function rpsgame(yourchoice){
  var humanChoice,botChoice;
  
  console.log(yourchoice);
  
  humanChoice = yourchoice.id;
  console.log('humanChoice: ',humanChoice);
  
  botChoice = numberToChoice(randToRPSInt());
  console.log('Computer choice: ',botChoice);
  
  results = decideWinner(humanChoice,botChoice); //[0,1] human loat| bot won
  console.log(results);
  
  message = finalMessage(results) // {'message':'you Won!','color':'green'}
  console.log(message);
  
  rpsFrontEnd(yourchoice.id,botChoice,message);
  
}

function randToRPSInt(){
return Math.floor(Math.random()*3);
}

function numberToChoice(number){
return ['rock','paper','scissors'][number];
}

function decideWinner(yourchoice,computerChoice){
var rpsDatabase = {
  'rock':{'scissors':1,'rock':0.5,'paper':0},
  'paper':{'rock':1,'paper':0.5,'scissors':0},
  'scissors':{'paper':1,'scissors':0.5,'rock':0},
}

var yourScore =  rpsDatabase[yourchoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourchoice];

return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
if(yourScore === 0){
return {'message':'YOU LOST !','color':'red'};
}else if(yourScore === 0.5){
return {'message':'YOU TIED !','color':'yellow'};
}else{
return {'message':'YOU Won !','color':'Green'};
}
}


function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
var imagesDatabase={
'rock':document.getElementById('rock').src,
'paper':document.getElementById('paper').src,
'scissors':document.getElementById('scissors').src,
}

//let remove all the Images
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

//put all the Images in different div 
var humanDiv = document.createElement('div');
var messageDiv = document.createElement('div');
var botDiv = document.createElement('div');

humanDiv.innerHTML = "<img src = '"+imagesDatabase[humanImageChoice]+"'height =150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"

messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color']+";fontSize:40px;padding:30px;'>"+finalMessage['message']+"</h1>"

botDiv.innerHTML = "<img src = '"+imagesDatabase[botImageChoice]+"'height =150 width=150 style='box-shadow: 0px 10px 50px rgba(243,30,24,1);'>"

//append All 
document.getElementById('flext-box-rps-div').appendChild(humanDiv);
document.getElementById('flext-box-rps-div').appendChild(messageDiv);
document.getElementById('flext-box-rps-div').appendChild(botDiv);
}


// challenge 4: Change the color of All Buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

//make a copy of all-buttons array as copyAllButtons array.
var copyAllButtons = [];
for(let i=0; i<all_buttons.length ; i++){
copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThiny){

if(buttonThiny.value === 'red'){
buttonRed();
}else if(buttonThiny.value === 'green'){
buttonGreen();
}else if(buttonThiny.value === 'random'){
randomColors();
}else if(buttonThiny.value === 'reset'){
buttonColorReset();
}
}

function buttonRed(){
	for(let i=0; i < all_buttons.length; i++){
	all_buttons[i].classList.remove(all_buttons[i].classList[1]);
	all_buttons[i].classList.add('btn-danger');
	}
}

function buttonGreen(){
	for(let i=0; i < all_buttons.length; i++){
	all_buttons[i].classList.remove(all_buttons[i].classList[1]);
	all_buttons[i].classList.add('btn-success');
	}
}

function buttonColorReset(){
    for(let i=0; i < all_buttons.length; i++){
	all_buttons[i].classList.remove(all_buttons[i].classList[1]);
	all_buttons[i].classList.add(copyAllButtons[i]);
	}
}

function randomColors(){
var choice = ['btn-primary','btn-danger','btn-success','btn-warning']
for(let i=0; i < all_buttons.length; i++){
	var randomNumber = Math.floor(Math.random()*4);
	all_buttons[i].classList.remove(all_buttons[i].classList[1]);
	all_buttons[i].classList.add(choice[randomNumber]);
	}
}
