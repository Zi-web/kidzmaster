$(document).ready(function() { // Ждём загрузки страницы


  var slides = $(this).find(".slider__slides").children(".slider__slide"); // Получаем массив всех слайдов
  var slides2 = $(this).find(".slider2__slides").children(".slider2__slide"); // Получаем массив всех слайдов
  var width = $(this).find(".slider__slides").width(); // Получаем ширину видимой области
  var width2 = $(this).find(".slider2__slides").width(); // Получаем ширину видимой области
  var i = slides.length; // Получаем количество слайдов
  var i2 = slides2.length; // Получаем количество слайдов
  var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
  var offset2 = i2 * width2; // Задаем начальное смещение и ширину всех слайдов
  var cheki = i-1;
  var cheki2 = i2-1;
  
  $(this).find(".slider__slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
  $(this).find(".slider2__slides").css('width',offset2); // Задаем блоку со слайдами ширину всех слайдов
  
  for (j=0; j < slides.length; j++) {
    if (j==0) {
      $(this).find(".slider__navigation").append("<div class='dot active'></div>");
    }
    else {
      $(this).find(".slider__navigation").append("<div class='dot'></div>");
    }
  };

  for (j2=0; j2 < slides2.length; j2++) {
    if (j2==0) {
      $(this).find(".slider2__navigation").append("<div class='dot active'></div>");
    }
    else {
      $(this).find(".slider2__navigation").append("<div class='dot'></div>");
    }
  }
  
  var dots = $(this).find(".slider__navigation").children(".dot");
  offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
  i = 0; // Обнуляем номер текущего слайда

  var dots2 = $(this).find(".slider2__navigation").children(".dot");
  offset2 = 0; // Обнуляем смещение, так как показывается начала 1 слайд
  i2 = 0; // Обнуляем номер текущего слайда

  $(".slider__navigation .dot").click(function(){
    $(".slider__navigation .active").removeClass("active");                 
    $(this).addClass("active");
    i = $(this).index();
    offset = i * width;
    $(".slider__slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
  });
  
   $(".slider2__navigation .dot").click(function(){
    $(".slider2__navigation .active").removeClass("active");                 
    $(this).addClass("active");
    i2 = $(this).index();
    offset2 = i2 * width2;
    $(".slider2__slides").css("transform","translate3d(-"+offset2+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
  });
  
  $(".slider2__next").click(function(){  // Событие клика на кнопку "следующий слайд"
    if (offset2 < width2 * cheki2) { // Проверяем, дошли ли мы до конца
      offset2 += width2; // Увеличиваем смещение до следующего слайда
      $(".slider2__slides").css("transform","translate3d(-"+offset2+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
      $(".slider2__navigation .active").removeClass("active"); 
      $(dots[++i2]).addClass("active");
    }
  });


  $(".slider2__prev").click(function(){  // Событие клика на кнопку "предыдущий слайд"
    if (offset2 > 0) { // Проверяем, дошли ли мы до конца
      offset2 -= width2; // Уменьшаем смещение до предыдущегоо слайда
      $(".slider2__slides").css("transform","translate3d(-"+offset2+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
      $(".slider2__navigation .active").removeClass("active"); 
      $(dots[--i2]).addClass("active");
    }
  });

});