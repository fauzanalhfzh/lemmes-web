//fixed navbar
window.onscroll = function(){
  const header = document.querySelector('header')
  const fixNav = header.offsetTop
  const topButton = document.querySelector('#toTop')

  if (window.pageYOffset >  fixNav) {
    header.classList.add('navbar-fixed')
    topButton.classList.remove('hidden')
    topButton.classList.add('flex')
  }else{
    header.classList.remove('navbar-fixed')
    topButton.classList.remove('flex')
    topButton.classList.add('hidden')
  }
}

// Hamburger

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

// klik diluar hamburger
window.addEventListener('click', function (e) {
  if(e.target != navMenu && e.target != hamburger){
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})

// dark mode toggle

const darkToggle = document.querySelector('#dark-toggle')
const html  = document.querySelector('html')

darkToggle.addEventListener('click', function () {
  if(darkToggle.checked){
    html.classList.add('dark')
    localStorage.theme = 'dark'
  }else{
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}