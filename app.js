@@ -71,13 +71,6 @@ qnNum.innerHTML = data[`${state}`]["id"];
qn.innerHTML = data[`${state}`]["Question"];


function startTimer () {
  let start = performance.now()
  console.log(start)
  // let minutes = Maths.floor(performance.now / 60000);
  // let seconds = ((performance.now % 60000) / 1000 ).toFixed(0);
  // console.log(minutes + ":" + (seconds < 10? "0" : " ") + seconds) ;
} 

// Selecting the correct/wrong answer and adding colour
function correctAnswer (id){
@@ -120,10 +113,27 @@ function nextQuestion() {
    /* else {
    console.log('error'); }*/


    document.querySelector("#quizContainer").innerHTML = optionArray;


 }


 function displayResults() {
   document.getElementById('quiz-container-results').style.display = "block";
   document.getElementById('quizContainer').style.display = "none";
   document.querySelector('.top-sec').style.display = "none";
   document.getElementById('finish-btn').style.display = "none";
   document.getElementById('qns-right').innerHTML = `Total correct answers: ${correctScore}`
   document.getElementById('qns-wrong').innerHTML = `Total incorrect answers: ${incorrectScore}`

 }

 function openInstructions() {
  document.getElementById('instructions').style.display = "block";
 }

 function closeInstructions() {
   document.getElementById('instructions').style.display = "none";
 }


//Disabling buttons when an answer as been selected
document.querySelectorAll(".option").forEach(function(eachElement){
  eachElement.addEventListener("click", disableBtns)
}) 
// Creates HTML elements which are the options to the question 
for (let [key, value] of Object.entries(optionInput)) {
  optionArray += `<button class="option" onClick="correctAnswer(this.id)" id="${key}" value="${key}">
                    <input type="radio" class="radio" name="radio"></input>${value}
                    </button> `;
  
}
document.querySelector("#quizContainer").innerHTML = optionArray;
document.getElementById('qns-right').innerHTML = correctScore
/* function functionCaller (id){
    //selectOnlyThis(id)
 correctAnswer()
