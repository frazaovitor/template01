$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    infinite:true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

menuToggle()

function menuToggle() {
  let menuHamburguer = document.querySelector('#menuHamburguer')
  let navHeader = document.querySelector('#navHeader')
  let fecharMenu = document.querySelectorAll('#fecharMenu')

  menuHamburguer.addEventListener('click', () => {
    navHeader.classList.remove('menuHide')
  })

  fecharMenu.forEach((e) => {
    e.addEventListener('click', () => { navHeader.classList.add('menuHide') })
  })
}