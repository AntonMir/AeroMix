'use strict';

// Вызов JS после загрузки HTML
$(document).ready(function() {  // полная загрузка страницы

  // Перевод картинку на передний план в header
  $('.header__imgs').on('mouseover', 'img', function() {
    let selectHeaderImg = $(this).index() + 1;  
    console.log(selectHeaderImg);
    $(`.header__imgs img`).css({'bottom': '0', 'top': 'auto', 'z-index': '0'})
    $(`.header__imgs img:nth-of-type(${selectHeaderImg})`).css({'bottom': 'auto', 'top': '0', 'z-index': '1'})
  })

  // Услуги > Дети
  $('.services__navbar a:nth-of-type(1)').click( function() {
    $('.services__navbar a:nth-of-type(1)').css('background-color', '#FFC328');
    $('.services__navbar a:nth-of-type(2)').css('background-color', '#FFFFFF');
    $('.services__item').css('display', 'none');
    $('.services__item1, .services__item2, .services__item3, .services__item4, .services__item5').css('display', 'block');
  })

  // Услуги > Взрослые
  $('.services__navbar a:nth-of-type(2)').click( function() {
    $('.services__navbar a:nth-of-type(2)').css('background-color', '#FFC328');
    $('.services__navbar a:nth-of-type(1)').css('background-color', '#FFFFFF');
    $('.services__item').css('display', 'block');
    $('.services__item1, .services__item2, .services__item3, .services__item4, .services__item5').css('display', 'none');
  })

  // Раскрывает подробную информацию каждого элемента в меню "Услуги"
  $('.services__wrapper').on('mouseover', '.services__item', function() {
    let selectServiceItem = $(this).index() + 1;    

    if (selectServiceItem == 2) {
      $(`.services__item div`).css({'height': '10%', 'top': '40%'})
      $(`.services__item${selectServiceItem} div`).css({'height': 'auto', 'top': '7%'})
      $(`.services__item3 div`).css({'height': '20%', 'top': '35%'})

    } else if (selectServiceItem == 3) {
      $(`.services__item div`).css({'height': '10%', 'top': '40%'})
      $(`.services__item${selectServiceItem} div`).css({'height': 'auto', 'top': '15%'})
      $(`.services__item2 div`).css({'height': '20%', 'top': '35%'})

    } else {
      $(`.services__item div`).css({'height': '10%', 'top': '40%'})
      $(`.services__item2 div`).css({'height': '20%', 'top': '35%'})
      $(`.services__item3 div`).css({'height': '20%', 'top': '35%'})
      $(`.services__item${selectServiceItem} div`).css({'height': 'auto', 'top': '15%'})
    }  

  })









  
})