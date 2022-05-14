window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection (section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop 
  const sectionHeight = section.offsetHeight
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionTopReachOrPassedTargeline = targetLine >= sectionTop
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  const sectionBoundaries = sectionTopReachOrPassedTargeline && !sectionEndPassedTargetline
  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)
  
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active')
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
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about img, #about .content, #contact, #contact heade, #contact img , #contact .content, footer');