$(document).ready(function() {
    $(".clickable").click(function() {
        $("#walrus-showing").toggle();
        $("#walrus-hidden").toggle();
        
    });
    $(".hideMe").click(function() {
        $("#walrus-hidden").fadeToggle();
        
    });
    $("#secret-text").click(function() {
        $("#secret").toggle();
});


})

// const test = document.querySelector('div')

// $('div').click(function({
