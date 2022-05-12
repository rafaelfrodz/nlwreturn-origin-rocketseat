window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection () {
  const targetLine = screenY + innerHeight / 2
  const sectionTop = home.offsetTop 
  const sectionHeight = home.offsetHeight

  const sectionTopReachOrPassedTargeline  if (sectionTop < targetLine) {
    
  } 

}

























function showNavOnScroll() {
  if (scrollY > 0) {
    document.querySelector("#navigation").classList.add("scroll")
  } else {
    document.querySelector("#navigation").classList.remove("scroll")
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 800) {
    document.querySelector("#backToTopButton").classList.add("show")
  } else {
    document.querySelector("#backToTopButton").classList.remove("show")
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
}).reveal('#home, #home img, #home .stats, #services header, #services .card, #about, #about header, #about .content ');