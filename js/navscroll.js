const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
var sections_scroll;

for (let i = 0; i < sections.length; i++) {
  nav.appendChild(
    document
      .createRange()
      .createContextualFragment(
        `<a href="#${sections[i].id}"><div class="navbutton ${sections[i].id}"></div></a>`
      )
  );
}

resetSectionSize();
verifScroll();

function resetSectionSize() {
  sections_scroll = [];
  var scroll = document.querySelector("main").scrollTop;
  for (let i = 0; i < sections.length; i++) {
    sections_scroll.push([
      sections[i],
      sections[i].getBoundingClientRect().top + scroll,
    ]);
  }
}

function refreshNavbar(){
  var scroll = document.querySelector("main").scrollTop;
  for (let i = 0; i < sections_scroll.length; i++) {
    if (scroll+30 >= sections_scroll[i][1]) {
      var buttons = document.querySelectorAll("nav .navbutton");
      for (let j = 0; j < sections_scroll.length; j++) {
        buttons[j].classList.remove("active");
      }
      buttons[i].classList.add("active");
    }
  }
}

function testAnimations(){
  let animations_container = document.querySelectorAll("div.animation-to-right,div.animation-to-left")
  for(let i = 0; i < animations_container.length; i++){
      if(animations_container[i].getBoundingClientRect().top > 0 && animations_container[i].getBoundingClientRect().top < window.innerHeight){
        animations_container[i].classList.remove("inactive")
      }else{
        animations_container[i].classList.add("inactive")
      }
  }
}

function verifScroll() {
  refreshNavbar()
  testAnimations()
}

window.addEventListener("resize", function () {
  resetSectionSize();
});

function openMenu(){
  var Menu = document.querySelector("#Menu")
  if(Menu.style.top == "0px"){
      closeMenu()
  }else{
      Menu.style.top = 0;
      var Button = document.querySelectorAll("#home-button line:not(:first-child)")
      Button.forEach(element => element.style.display = "none")
  }
}

function closeMenu(){
  var Menu = document.querySelector("#Menu")
  var Button = document.querySelectorAll("#home-button line:not(:first-child)")
  Button.forEach(element => element.style.display = "block")
  Menu.style.top = '-100%';
}

document.querySelector("#Menu").addEventListener("click", closeMenu);
