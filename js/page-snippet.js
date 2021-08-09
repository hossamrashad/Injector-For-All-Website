var jqueryToAdd = document.createElement("script");

jqueryToAdd.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';

document.getElementsByTagName('head')[0].appendChild(jqueryToAdd);

$(document).ready(function() {
    // code 
    $(":root").css({ fontSize: "20px" });
});




$(".app__pre").append(",");