let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.project__add');
let closePopap = document.querySelector('.close');

openPopup.addEventListener('click', function(){
    popup.classList.remove('visually-hidden')
})

closePopap.addEventListener('click', function(){
    popup.classList.add('visually-hidden')
})