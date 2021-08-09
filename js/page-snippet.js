var jqueryToAdd = document.createElement("script");

jqueryToAdd.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';

document.getElementsByTagName('head')[0].appendChild(jqueryToAdd);

$(document).ready(function() {
    // code 
    $(":root").css({ fontSize: "20px" });
});
//  Element selector
var ElementName = document.getElementsByClassName("div.app__pre");

// create Element
var NewElement = document.createElement("span");

// create Text Node
var NewText = document.createTextNode(",");

// Append Text To New Element
NewElement.appendChild(NewText);

// Append Text To New Element
ElementName.insertBefore(NewElement, ElementName.childNodes[100]);