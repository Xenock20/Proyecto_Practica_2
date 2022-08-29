$(document).ready(function () {
  $('button').click(function (e) { 
    e.preventDefault();
    const anio = document.querySelector('input').value

    const now = new Date()
    const year = now.getFullYear()  

    if(isNaN(year - parseInt(anio))){
      $('.anios').remove();
      $('.edad').append(`<p class="anios" >Valor incorrecto!</p>`);
    }
    else{
      $('.anios').remove();
      $('.edad').append(`<p class="anios" >Tienes ${year - parseInt(anio)} años</p>`);
      $('.anios').slideUp( 0 ).fadeIn( 400 );
    }
  });
});