var boton = document.querySelector('.boxhome');
var video = document.querySelector('#video');


boton.addEventListener('click', () => {
    video.style.display = 'block';
    video.play();
});
