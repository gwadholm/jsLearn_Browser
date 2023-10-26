(function(){

  let body = document.querySelector("body");

  document.querySelector('h1#myTag').insertAdjacentHTML("afterend" ,"<h2>My clipart library</h2>");

  document.querySelector('h2').insertAdjacentHTML("beforebegin", `<img class="thumb" src="https://design.gracetoread.com/img/clipart/nature/monarch_01.png" />`);

  //lightbox
  document.querySelector(".thumb").addEventListener('click', function(e) {

    body.insertAdjacentHTML("beforeend", `<div class="lightboxDiv"><img class="lightbox" src="https://design.gracetoread.com/lb/img/clipart/nature/monarch_01.png" /></div>`);

    document.querySelector(".lightboxDiv").addEventListener('click', (e) => {
      document.querySelector("div.lightboxDiv").remove();
      })
  })

})()










/*
const body = document.querySelector("body");
const p2 = document.createElement("p");
body.appendChild(h2);
p2.textContent = "A beautiful butterfly"



document.querySelector("#headNav").addEventListener('pointerleave', function() {
  console.log("missed me!");
})

file:///c%3A/Users/gwadh/Documents/Valencia/Fall2023/WebProgramming/jsLearn_Browser/jsLearn_Browser/index.html

//digital clock function
function displayTime(){
  const clock = document.querySelector("#clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
displayTime()
setInterval(displayTime, 1000);



const topicButton = `
<div class="topicButtonContainer">
  <input id="topic1" type="radio" name="topic" value="topic" />
  <label for="topic1" class="topicButton">
  Nature
  </label>  
</div>`;          


document.querySelector("fieldset").insertAdjacentHTML("afterbegin", `<div class="actionGroup">${topicButton}${topicButton}${topicButton}${topicButton}${topicButton}</div>`);



*/

