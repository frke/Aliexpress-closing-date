// ==UserScript==
// @name       Aliexpress date and create google calendar event
// @version    1
// @require    http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.js
// @description Add dates to aliexpress fields "Awaiting delivery" and link to create event in google calendar
// @grant    none
// ==/UserScript==


// return date in YYYYMMMDD format eg.  "20210108" This is used for google create event in calendar link
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('');
}



// iterate trough all clases  .left-sendgoods-day

$(".left-sendgoods-day").each(function(){
  var dni=0;
  var sekunde = 0;
  sekunde = Number($(this).attr("lefttime"));  // there is attribute lefttime - this is miliseconds till end of closing the order
  dni = Math.floor(sekunde/86400000);  // convert to days till closing the order
    
  var date = new Date();
  date.setDate(date.getDate() + dni); // closing date
  
  var googleCalendarUrl="https://calendar.google.com/calendar/u/0/r/eventedit?text=Aliexpress naročilo&dates="+formatDate(date)+"T120000Z/"+formatDate(date)+"T130000Z&details&location&trp=false";
 
  $(this).append("<br><font color=red>"+date.toLocaleString()+"</font><a href='"+googleCalendarUrl+"'><br>create google calendar event</a>");
  
});

// yellow border
$(".left-sendgoods-day").css('border', '3px solid yellow');
