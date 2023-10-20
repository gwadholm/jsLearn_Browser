(function(){
// const body = document.querySelector("body");
// const p2 = document.createElement("p");
// body.appendChild(h2);
// p2.textContent = "A beautiful butterfly"
let body = document.querySelector("body");

document.querySelector('h1').insertAdjacentHTML("afterend" ,"<h2>My clipart library</h2>");
document.querySelector('h2').insertAdjacentHTML("beforebegin", `<img src="https://design.gracetoread.com/img/clipart/nature/monarch_01.png" />`);

document.querySelector("h1").addEventListener('click', () => {
  
  body.insertAdjacentHTML("beforeend", `<div class="lightboxDiv"><img class="lightbox" src="https://design.gracetoread.com/lb/img/clipart/nature/monarch_01.png" /></div>`);
  

  document.querySelector(".lightbox").addEventListener('click', (e) => {

    if (e.target.getAttribute('class') === "lightboxDiv") {
      e.target.remove();}
    else if (e.target.getAttribute('class') === "lightbox") {
      e.target.remove();
      document.querySelector("div.lightboxDiv").remove();
    }
  });

});





//digital clock function
function displayTime(){
  const clock = document.querySelector("#clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
displayTime()
setInterval(displayTime, 1000);

})()