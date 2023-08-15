let ans =document.querySelectorAll(".ans");
let label =document.querySelectorAll("label");
let showScore = document.querySelector("#phrase")
let actualAns = [1,1,1,1]
let currentAns = [];
let score = 0;

document.querySelector(".doneBtn").addEventListener("click",function (){
  hideLabel()
  scoreCheck()

})


function displayAns (value,i){
  ans[i-1].textContent = value;
  currentAns[i-1] = value

}


function hideLabel(){
    for(j=0;j<label.length;j++){
    label[j].classList.add('hide')
  }

}

function scoreCheck(){
    score=0
   for(i=0;i<actualAns.length;i++){
    if(actualAns[i]==currentAns[i]){
      score++
      ans[i].classList.add("corretAns");
      ans[i].textContent = currentAns[i] + " ✔️" 
    }else{
      if(currentAns[i]==undefined){
        currentAns[i]= "_"
      }
      ans[i].classList.add("wrongAns");
      ans[i].textContent = currentAns[i] + " ❌" + `[${actualAns[i]}]`
    }
  }
  showScore.classList.remove("hide")
  showScore.innerHTML= `Score : ${score}/${actualAns.length} 🚀`
  document.querySelector(".doneBtn").innerHTML = "Well Done!!"
  document.querySelector("#stopWatch").innerHTML = "-- : -- : --"
}





function intervalTest ()
{
let totalSecond = 7200;
let currSecond = 0;
let currMin = 0;
let currHr=0;
const intervalTest = setInterval(() => 
  {
   totalSecond -= 1;
   currSecond += 1
   let showHr= 1-currHr
   let showMin = 59-currMin
   let showSec = 60-currSecond


   if(currSecond == 60){
    currSecond=0
    currMin +=1
    showSec =  "0"
   }

   if(currMin == 60){
    currMin =0
    currHr +=1
   }

   if(showSec<10){showSec = "0"+showSec}
   if(showMin<10){showMin = "0"+showMin}
  if (totalSecond === 0) { clearInterval(intervalTest); }
  if (showHr <= 0 && showMin<=0 && showSec<=0) { clearInterval(intervalTest); }

  document.querySelector(".showHr").textContent = "0"+showHr
  document.querySelector(".showMin").textContent = showMin
  document.querySelector(".showSec").textContent = showSec
   console.log(showHr+ ":" +showMin + ":"+ showSec);
  }, 1000);
}


intervalTest()