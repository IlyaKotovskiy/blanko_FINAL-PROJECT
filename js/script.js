// Плавная прокрутка

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

// Бургер

let burger = document.querySelector('.header__btn_mobile')
let menu = document.querySelector('.mobile')
let menuLinks = document.querySelectorAll('.header__item')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
  })
})