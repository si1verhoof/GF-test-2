$(document).ready(function(){
    //Текст
    $(".functionality__item--sound").click(function() { 
        $(".functionality__text-block--growth").addClass('functionality__text-block--growth--hidden');
        $(".functionality__text-block--days").addClass('functionality__text-block--days--hidden');
        $(".functionality__text-block--favorite").addClass('functionality__text-block--favorite--hidden');
        $(".functionality__text-block--interface").addClass('functionality__text-block--interface--hidden');
        $(".functionality__text-block--sound").removeClass('functionality__text-block--sound--hidden');

    //Изображение
        $(".functionality__img").removeClass('functionality__img--growth');
        $(".functionality__img").removeClass('functionality__img--days');
        $(".functionality__img").removeClass('functionality__img--favorite');
        $(".functionality__img").removeClass('functionality__img--interface');
        $(".functionality__img").addClass('functionality__img--sound');

    //Положение иконок
        $(".functionality__circle").removeClass('functionality__circle--growth-checked');
        $(".functionality__circle").removeClass('functionality__circle--days-checked');
        $(".functionality__circle").removeClass('functionality__circle--favorite-checked');
        $(".functionality__circle").removeClass('functionality__circle--interface-checked');
        $(".functionality__circle").addClass('functionality__circle--sound-checked');
    });

    $(".functionality__item--growth").click(function() { 
    //Текст
        $(".functionality__text-block--sound").addClass('functionality__text-block--sound--hidden');
        $(".functionality__text-block--days").addClass('functionality__text-block--days--hidden');
        $(".functionality__text-block--favorite").addClass('functionality__text-block--favorite--hidden');
        $(".functionality__text-block--interface").addClass('functionality__text-block--interface--hidden');
        $(".functionality__text-block--growth").removeClass('functionality__text-block--growth--hidden');

    //Изображение
        $(".functionality__img").removeClass('functionality__img--sound');
        $(".functionality__img").removeClass('functionality__img--days');
        $(".functionality__img").removeClass('functionality__img--favorite');
        $(".functionality__img").removeClass('functionality__img--interface');
        $(".functionality__img").addClass('functionality__img--growth');

    //Положение иконок
        $(".functionality__circle").removeClass('functionality__circle--sound-checked');
        $(".functionality__circle").removeClass('functionality__circle--days-checked');
        $(".functionality__circle").removeClass('functionality__circle--favorite-checked');
        $(".functionality__circle").removeClass('functionality__circle--interface-checked');
        $(".functionality__circle").addClass('functionality__circle--growth-checked');
    });

    $(".functionality__item--days").click(function() { 
    //Текст
        $(".functionality__text-block--growth").addClass('functionality__text-block--growth--hidden');
        $(".functionality__text-block--sound").addClass('functionality__text-block--sound--hidden');
        $(".functionality__text-block--favorite").addClass('functionality__text-block--favorite--hidden');
        $(".functionality__text-block--interface").addClass('functionality__text-block--interface--hidden');
        $(".functionality__text-block--days").removeClass('functionality__text-block--days--hidden');

    //Изображение
        $(".functionality__img").removeClass('functionality__img--growth');
        $(".functionality__img").removeClass('functionality__img--sound');
        $(".functionality__img").removeClass('functionality__img--favorite');
        $(".functionality__img").removeClass('functionality__img--interface');
        $(".functionality__img").addClass('functionality__img--days');

    //Положение иконок
        $(".functionality__circle").removeClass('functionality__circle--growth-checked');
        $(".functionality__circle").removeClass('functionality__circle--sound-checked');
        $(".functionality__circle").removeClass('functionality__circle--favorite-checked');
        $(".functionality__circle").removeClass('functionality__circle--interface-checked');
        $(".functionality__circle").addClass('functionality__circle--days-checked');
    });

    $(".functionality__item--favorite").click(function() { 
    //Текст
        $(".functionality__text-block--growth").addClass('functionality__text-block--growth--hidden');
        $(".functionality__text-block--days").addClass('functionality__text-block--days--hidden');
        $(".functionality__text-block--sound").addClass('functionality__text-block--sound--hidden');
        $(".functionality__text-block--interface").addClass('functionality__text-block--interface--hidden');
        $(".functionality__text-block--favorite").removeClass('functionality__text-block--favorite--hidden');

    //Изображение
        $(".functionality__img").removeClass('functionality__img--growth');
        $(".functionality__img").removeClass('functionality__img--days');
        $(".functionality__img").removeClass('functionality__img--sound');
        $(".functionality__img").removeClass('functionality__img--interface');
        $(".functionality__img").addClass('functionality__img--favorite');

    //Положение иконок
        $(".functionality__circle").removeClass('functionality__circle--growth-checked');
        $(".functionality__circle").removeClass('functionality__circle--days-checked');
        $(".functionality__circle").removeClass('functionality__circle--sound-checked');
        $(".functionality__circle").removeClass('functionality__circle--interface-checked');
        $(".functionality__circle").addClass('functionality__circle--favorite-checked');
    });

    $(".functionality__item--interface").click(function() { 
    //Текст
        $(".functionality__text-block--growth").addClass('functionality__text-block--growth--hidden');
        $(".functionality__text-block--days").addClass('functionality__text-block--days--hidden');
        $(".functionality__text-block--favorite").addClass('functionality__text-block--favorite--hidden');
        $(".functionality__text-block--sound").addClass('functionality__text-block--sound--hidden');
        $(".functionality__text-block--interface").removeClass('functionality__text-block--interface--hidden');

    //Изображение
        $(".functionality__img").removeClass('functionality__img--growth');
        $(".functionality__img").removeClass('functionality__img--days');
        $(".functionality__img").removeClass('functionality__img--favorite');
        $(".functionality__img").removeClass('functionality__img--sound');
        $(".functionality__img").addClass('functionality__img--interface');

    //Положение иконок
        $(".functionality__circle").removeClass('functionality__circle--growth-checked');
        $(".functionality__circle").removeClass('functionality__circle--days-checked');
        $(".functionality__circle").removeClass('functionality__circle--favorite-checked');
        $(".functionality__circle").removeClass('functionality__circle--sound-checked');
        $(".functionality__circle").addClass('functionality__circle--interface-checked');
    });
});