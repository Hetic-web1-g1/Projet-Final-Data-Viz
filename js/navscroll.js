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
  for (let i = 0; i < sections.length; i++) {
    sections_scroll.push([
      sections[i],
      sections[i].getBoundingClientRect().top,
    ]);
  }
}

function verifScroll() {
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

window.addEventListener("resize", function () {
  resetSectionSize();
});
