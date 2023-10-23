(function(){
// const body = document.querySelector("body");
// const p2 = document.createElement("p");
// body.appendChild(h2);
// p2.textContent = "A beautiful butterfly"
let body = document.querySelector("body");

document.querySelector('h1#myTag').insertAdjacentHTML("afterend" ,"<h2>My clipart library</h2>");
document.querySelector('h2').insertAdjacentHTML("beforebegin", `<img class="normal" src="https://design.gracetoread.com/img/clipart/nature/monarch_01.png" />`);

// const topicButton = `
// <div class="topicButtonContainer">
//   <input id="topic1" type="radio" name="topic" value="topic" />
//   <label for="topic1" class="topicButton">
//   Nature
//   </label>  
// </div>`;          


// document.querySelector("fieldset").insertAdjacentHTML("afterbegin", `<div class="actionGroup">${topicButton}${topicButton}${topicButton}${topicButton}${topicButton}</div>`);



//lightbox
document.querySelector(".normal").addEventListener('click', () => {
  const screenWidth = `ScreenWidth: ${screen.width}` 
  const screenHeight = `ScreenHeight: ${screen.height}` 

  body.insertAdjacentHTML("beforeend", `<div class="lightboxDiv"><img class="lightbox" src="https://design.gracetoread.com/lb/img/clipart/nature/monarch_01.png" /></div>`);

  console.log(screenWidth + " " + screenHeight);
  

  document.querySelector(".lightbox").addEventListener('click', (e) => {

    if (e.target.getAttribute('class') === "lightboxDiv") {
      e.target.remove();}
    else if (e.target.getAttribute('class') === "lightbox") {
      e.target.remove();
      document.querySelector("div.lightboxDiv").remove();
    }
  })
});

document.querySelector("#headNav").addEventListener('pointerleave', function() {
  console.log("missed me!");
})


})()

/*
//digital clock function
function displayTime(){
  const clock = document.querySelector("#clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
displayTime()
setInterval(displayTime, 1000);


file:///c%3A/Users/gwadh/Documents/Valencia/Fall2023/WebProgramming/jsLearn_Browser/jsLearn_Browser/index.html
*/
