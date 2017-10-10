function addImage() {
  var x = Math.floor(Math.random() * ($(window).width() + 1) );
  var y = Math.floor(Math.random() * ($(window).height() + 1) + 1);
  console.log(x, y);
  console.log($(window).width(), $(window).height());
  var trollImg = $('<img src="/icons/doge.png" style="left: ' + x + 'px; down: ' + y + 'px;" class="troll-image" />');
  console.log(trollImg);
  $("#troll").append(trollImg);
}


function main() {
  $("#header").click(function() {
    $("#header").hide();
    $("#header").fadeIn(1000);
    window.location = "/"
  });
}


$(document).ready(main);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(function(registration) {
      console.log("registration was successful with scope: ", registration.scope);
    }, function(err) {
      alert("Service worker registration error: ", err);
      console.log("Service worker registration error: ", err);
    });
  });
}

setInterval(addImage, 2000)
