const option1 = document.getElementById ("option1")
const option2 = document.getElementById ("option2")
const option3 = document.getElementById ("option3")
const wrongAudio = document.getElementById ("wrong-audio")
const successAudio = document.getElementById ("success-audio")
const correctCard = document.getElementById ("correct")
var answer = 0

function generate_equation (){
    var num1 = Math.floor(Math.random() * 13)
    var num2 = Math.floor(Math.random() * 13)
    var dummyAnswer1 = Math.floor(Math.random() * 13)
    var dummyAnswer2 = Math.floor(Math.random() * 13)
    var allAnswers = []
    var switchAnswers = []

    if(num1 > num2){
        answer = eval(num1 - num2);
        document.getElementById("num1").innerHTML = num1; 
        document.getElementById("num2").innerHTML = num2;
      }
      else{
        answer = eval(num2 - num1);
        document.getElementById("num1").innerHTML = num2; 
        document.getElementById("num2").innerHTML = num1;
      }

    if (dummyAnswer1 === answer || dummyAnswer2 === answer || dummyAnswer1 === dummyAnswer2){
        var dummyAnswer1 = Math.floor(Math.random() * 13)
        var dummyAnswer2 = Math.floor(Math.random() * 13)
    }

    allAnswers = [answer, dummyAnswer1, dummyAnswer2]

    for (i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0])
    }

    option1.innerHTML = switchAnswers[0]
    option2.innerHTML = switchAnswers[1]
    option3.innerHTML = switchAnswers[2]
}


option1.addEventListener ("click", function(){
    if(option1.innerHTML == answer) {
        generate_equation()
        successAudio.play()
        correctCard.style.display = ("flex")
        setTimeout (function(){
            correctCard.style.display = ("none")
        },2000)
    } else {
        wrongAudio.play()
    }
})

option2.addEventListener ("click", function(){
    if(option2.innerHTML == answer) {
        generate_equation()
        successAudio.play()
        correctCard.style.display = ("flex")
        setTimeout (function(){
            correctCard.style.display = ("none")
        },2000)
    } else {
        wrongAudio.play()
    }
})

option3.addEventListener ("click", function(){
    if(option3.innerHTML == answer) {
        generate_equation()
        successAudio.play()
        correctCard.style.display = ("flex")
        setTimeout (function(){
            correctCard.style.display = ("none")
        },2000)
    } else {
        wrongAudio.play()
    }
})

generate_equation ()

