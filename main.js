function onScroll() {
  if (scrollY > 0) {
    document.querySelector("#navigation").classList.add("scroll")
  } else {
    document.querySelector("#navigation").classList.remove("scroll")
  }
}

function openMenu() {
  document.querySelector("#body").classList.add("menu-expanded")
}

function closeMenu() {
  document.querySelector("#body").classList.remove("menu-expanded")
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home, #home img, #home .stats, #services header, #services .card');