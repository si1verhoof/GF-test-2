
var sandwichFunc1 = setTimeout(function sandwich1() {
    $("#managment__slide--sandwich").removeClass("managment__slide--middle");
    $("#managment__slide--sandwich").removeClass("managment__slide--top");
    $("#managment__slide--sandwich").addClass("managment__slide--bottom");
    sandwichFunc1 = setTimeout(sandwich1, 6000)
}, 0);
var sandwichFunc2 = setTimeout(function sandwich2() {
    $("#managment__slide--sandwich").removeClass("managment__slide--middle");
    $("#managment__slide--sandwich").addClass("managment__slide--top");
    $("#managment__slide--sandwich").removeClass("managment__slide--bottom");
    sandwichFunc2 = setTimeout(sandwich2, 6000)
}, 2000);
var sandwichFunc3 = setTimeout(function sandwich3() {
    $("#managment__slide--sandwich").addClass("managment__slide--middle");
    $("#managment__slide--sandwich").removeClass("managment__slide--top");
    $("#managment__slide--sandwich").removeClass("managment__slide--bottom");
    sandwichFunc3 = setTimeout(sandwich3, 6000)
}, 4000);

var saladFunc1 = setTimeout(function salad1() {
    $("#managment__slide--salad").removeClass("managment__slide--middle");
    $("#managment__slide--salad").addClass("managment__slide--top");
    $("#managment__slide--salad").removeClass("managment__slide--bottom");
    saladFunc1 = setTimeout(salad1, 6000)
}, 0);
var saladFunc2 = setTimeout(function salad2() {
    $("#managment__slide--salad").addClass("managment__slide--middle");
    $("#managment__slide--salad").removeClass("managment__slide--top");
    $("#managment__slide--salad").removeClass("managment__slide--bottom");
    saladFunc2 = setTimeout(salad2, 6000)
}, 2000);
var saladFunc3 = setTimeout(function salad3() {
    $("#managment__slide--salad").removeClass("managment__slide--middle");
    $("#managment__slide--salad").removeClass("managment__slide--top");
    $("#managment__slide--salad").addClass("managment__slide--bottom");
    saladFunc3 = setTimeout(salad3, 6000)
}, 4000);

var appleFunc1 = setTimeout(function apple1() {
    $("#managment__slide--apple").addClass("managment__slide--middle");
    $("#managment__slide--apple").removeClass("managment__slide--top");
    $("#managment__slide--apple").removeClass("managment__slide--bottom");
    appleFunc1 = setTimeout(apple1, 6000)
}, 0);
var appleFunc2 = setTimeout(function apple2() {
    $("#managment__slide--apple").removeClass("managment__slide--middle");
    $("#managment__slide--apple").removeClass("managment__slide--top");
    $("#managment__slide--apple").addClass("managment__slide--bottom");
    appleFunc2 = setTimeout(apple2, 6000)
}, 2000);
var appleFunc3 = setTimeout(function apple3() {
    $("#managment__slide--apple").removeClass("managment__slide--middle");
    $("#managment__slide--apple").addClass("managment__slide--top");
    $("#managment__slide--apple").removeClass("managment__slide--bottom");
    appleFunc3 = setTimeout(apple3, 6000)
}, 4000);