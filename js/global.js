(function(){

  let body = document.querySelector("body");

  document.querySelector('h2#myTag').insertAdjacentHTML("beforeend", `<img class="thumb" src="https://design.gracetoread.com/img/clipart/nature/monarch_01.png" />`);

  //lightbox
  document.querySelector(".thumb").addEventListener('click', function(e) {

    body.insertAdjacentHTML("beforeend", `<div class="lightboxDiv"><img class="lightbox" src="https://design.gracetoread.com/lb/img/clipart/nature/monarch_01.png" /></div>`);

    document.querySelector(".lightboxDiv").addEventListener('click', (e) => {
      document.querySelector("div.lightboxDiv").remove();
      })
  })

//Learning how to create Web Components, using Javascript The Definitive Guide 7th ed.

class SearchBox extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"});
    this.shadowRoot.append(SearchBox.template.content.cloneNode(true));

    this.input = this.shadowRoot.querySelector("#input");
    let leftSlot = this.shadowRoot.querySelector('slot[name="left"]');
    let rightSlot = this.shadowRoot.querySelector('slot[name="right"]');

    this.input.onfocus = () => { this.setAttribute("focused", ""); };
    this.input.onblur = () => { this.removeAttribute("focused");};

    leftSlot.onclick = this.input.onchange = (event) => {
      event.stopPropagation();
      if (this.disabled) return;
      this.dispatchEvent(new CustomEvent("search", {
        detail: this.input.value
      }));
      // console.log(this.input.value);
    };

    rightSlot.onclick = (event) => {
      event.stopPropagation();
      if (this.disabled) return;
      let e = new CustomEvent("clear", {cancelable: true});
      this.dispatchEvent(e);
      if (!e.defaultPrevented) {
        this.input.value = "";
      }
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "disabled") {
      this.input.disabled = newValue !== null;
    } else if (name === "placeholder") {
      this.input.placeholder = newValue;
    } else if (name === "value") {
      this.input.value = newValue;
    }
  }

  get placeholder() { return this.getAttribute("placeholder", value); }
  get size() { return this.getAttribute("size"); }
  get value() { return this.getAttribute("value"); }
  get disabled() { return this.hasAttribute("disabled"); }
  get hidden() { return this.hasAttribute("hidden"); }

  set placeholder(value) { this.setAttribute("placeholder", value); }
  set size(value) { this.setAttribute("size", value); }
  set value(text) { this.setAttribute("value", text); }
  set disabled(value) {
    if (value) this.setAttribute("disabled", "");
    else this.removeAttribute("disabled");
  }
  set hidden(value) {
    if (value) this.setAttribute("hidden", "");
    else this.removeAttribute("hidden");
  }
}

SearchBox.observedAttributed = ["disabled", "placeholder", "size", "value"];

SearchBox.template = document.createElement("template");

SearchBox.template.innerHTML = `
<style>
:host {
  display: inline-block;
  border: solid black 1px;
  border-radius: 25px;
  padding: 4px 6px;
}
:host([hidden]) {
  display: none;
}
:host([disable]) {
  opacity: 0.5;
}
:host([focused]) {
  box-shadow: 0 0 2px 2px #6AE;
}
input {
  border-width: 0;
  outline: none;
  font: inherit;
  background: inherit;
}
slot {
  cursor: default;
  user-select: none;
}
#search-boxDiv {
 width: 100%;
}
#search-boxDiv input {
 width: calc(100% - 50px);
}
</style>
<div id="search-boxDiv">
<slot name="left">\u{1f50d}</slot>
<input type="text" id="input" />
<slot name="right">\u{2573}</slot>
</div>
`;

customElements.define("search-box", SearchBox);




})()

// document.querySelector("button").addEventListener("mouseover", function(e) 
//   { 
//     document.querySelector("button").classList.add("transparent");

//   })

// document.querySelector("button").addEventListener("mouseleave", function(e) {
//   document.querySelector("button").classList.remove("transparent");
// })  








/*

document.querySelector('h1#myTag').insertAdjacentHTML("afterend" ,"<h2>My clipart library</h2>");

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

