$('.back-to-top').click(function () {
  $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () {
  // Отслеживаем начало прокрутки
  let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

  if (scrolled > 350) {
    // Если высота прокрутки больше 350 - показываем кнопку
    $('.back-to-top').addClass('active');
  } else {
    $('.back-to-top').removeClass('active');
  }
});
