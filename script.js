var mexicantreslechesScore = 0;
var ogbuttermilkScore = 0;
var cupcakeScore = 0;
var newyorkcheesecakeScore = 0;
var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

q1a1.addEventListener("click", cupcake);
q1a1.addEventListener('click',function onClick(){
  q1a1.style.backgroundColor = 'palevioletred';
  q1a1.style.color = 'white';
});
q1a2.addEventListener("click", mexicantresleches);
q1a2.addEventListener('click',function onClick(){
  q1a2.style.backgroundColor = 'palevioletred';
  q1a2.style.color = 'white';
});
q1a3.addEventListener("click", ogbuttermilk);
q1a3.addEventListener('click',function onClick(){
  q1a3.style.backgroundColor = 'palevioletred';
  q1a3.style.color = 'white';
});
q1a4.addEventListener("click", newyorkcheesecake);
q1a4.addEventListener('click',function onClick(){
  q1a4.style.backgroundColor = 'palevioletred';
  q1a4.style.color = 'white';
});
q2a1.addEventListener("click", newyorkcheesecake);
q2a1.addEventListener('click',function onClick(){
  q2a1.style.backgroundColor = 'palevioletred';
  q2a1.style.color = 'white';
});
q2a2.addEventListener("click", ogbuttermilk);
q2a2.addEventListener('click',function onClick(){
  q2a2.style.backgroundColor = 'palevioletred';
  q2a2.style.color = 'white';
});
q2a3.addEventListener("click", mexicantresleches);
q2a3.addEventListener('click',function onClick(){
  q2a3.style.backgroundColor = 'palevioletred';
  q2a3.style.color = 'white';
});
q2a4.addEventListener("click", cupcake);
q2a4.addEventListener('click',function onClick(){
  q2a4.style.backgroundColor = 'palevioletred';
  q2a4.style.color = 'white';
});

q3a1.addEventListener("click", mexicantresleches);
q3a1.addEventListener('click',function onClick(){
  q3a1.style.backgroundColor = 'palevioletred';
  q3a1.style.color = 'white';
});
q3a2.addEventListener("click", cupcake);
q3a2.addEventListener('click',function onClick(){
  q3a2.style.backgroundColor = 'palevioletred';
  q3a2.style.color = 'white';
});
q3a3.addEventListener("click", ogbuttermilk);
q3a3.addEventListener('click',function onClick(){
  q3a3.style.backgroundColor = 'palevioletred';
  q3a3.style.color = 'white';
});
q3a4.addEventListener("click", newyorkcheesecake);
q3a4.addEventListener('click',function onClick(){
  q3a4.style.backgroundColor = 'palevioletred';
  q3a4.style.color = 'white';
});

q4a1.addEventListener("click", ogbuttermilk);
q4a1.addEventListener('click',function onClick(){
  q4a1.style.backgroundColor = 'palevioletred';
  q4a1.style.color = 'white';
});
q4a2.addEventListener("click", cupcake);
q4a2.addEventListener('click',function onClick(){
  q4a2.style.backgroundColor = 'palevioletred';
  q4a2.style.color = 'white';
});
q4a3.addEventListener("click", newyorkcheesecake);
q4a3.addEventListener('click',function onClick(){
  q4a3.style.backgroundColor = 'palevioletred';
  q4a3.style.color = 'white';
});
q4a4.addEventListener("click", mexicantresleches);
q4a4.addEventListener('click',function onClick(){
  q4a4.style.backgroundColor = 'palevioletred';
  q4a4.style.color = 'white';
});

q5a1.addEventListener("click", ogbuttermilk);
q5a1.addEventListener('click',function onClick(){
  q5a1.style.backgroundColor = 'palevioletred';
  q5a1.style.color = 'white';
});
q5a2.addEventListener("click", cupcake);
q5a2.addEventListener('click',function onClick(){
  q5a2.style.backgroundColor = 'palevioletred';
  q5a2.style.color = 'white';
});
q5a3.addEventListener("click", mexicantresleches);
q5a3.addEventListener('click',function onClick(){
  q5a3.style.backgroundColor = 'palevioletred';
  q5a3.style.color = 'white';
});
q5a4.addEventListener("click", newyorkcheesecake);
q5a4.addEventListener('click',function onClick(){
  q5a4.style.backgroundColor = 'palevioletred';
  q5a4.style.color = 'white';
});

restart.addEventListener("click", restartQuiz);

function mexicantresleches(){
  mexicantreslechesScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " mexicantreslechesScore = " + mexicantreslechesScore);
  if(questionCount == 5){
    console.log("The quiz is done!");
    updateResult();
  }
}

function cupcake(){
  cupcakeScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " cupcakeScore = " + cupcakeScore);
  if(questionCount == 5){
    console.log("The quiz is done!");
    updateResult();
  }
}

function ogbuttermilk(){
    ogbuttermilkScore += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + " ogbuttermilkScore = " + ogbuttermilkScore);
    if(questionCount == 5){
      console.log("The quiz is done!");
      updateResult();
    }
  }

  function newyorkcheesecake(){
    newyorkcheesecakeScore += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + " newyorkcheesecakeScore = " + newyorkcheesecakeScore);
    if(questionCount == 5){
      console.log("The quiz is done!");
      updateResult();
    }
  }

function updateResult(){
  if(mexicantreslechesScore >= 2){
    result.innerHTML = "You are the Mexican Tres Leches Pancakes!";
    console.log("You are the Mexican Tres Leches Pancakes!");
  }else if(cupcakeScore >= 2){
    result.innerHTML = "You are the Cupcake Pancakes!";
    console.log("You are the Cupcake Pancakes!");
  }else if(ogbuttermilkScore >=2){
    result.innerHTML = "You are the Buttermilk Pancakes!";
    console.log("You are the Buttermilk Pancakes!");
  }else if(newyorkcheesecakeScore >=2){
    result.innerHTML = "You are the Newyork Cheesecake Pancakes!";
    console.log("You are the Newyork Cheesecake Pancakes!")
  }
}

function restartQuiz(){
    mexicantreslechesScore = 0;
    ogbuttermilkScore = 0;
    cupcakeScore = 0;
    newyorkcheesecakeScore = 0;
    questionCount = 0;
  result.innerHTML = "Your result is..."
}