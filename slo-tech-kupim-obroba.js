// ==UserScript==
// @name     Unnamed Script 977453
// @version  1
// @grant    none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.js
// ==/UserScript==

// [1] skip all iframe
if (window.self!=window.top) {return}

$('tr[data-tip="K"]').css('border', '3px solid red');
$('tr[data-tip="O"]').css('border', '1px solid blue');
