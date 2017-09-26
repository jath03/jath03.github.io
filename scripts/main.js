function openNav() {
  if (screen.width < 500) {
    document.getElementById("nav").style.width = "100%";
  } else {
    document.getElementById("nav").style.width = "25%";
  }
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
}



function main() {
  $("#header").click(function() {
    $("#header").hide();
    $("#header").fadeIn(1000);
  });
  $("#navButton").click(function () {
    openNav();
  });
  $("#navButton").css("height", $("#header").css("height"));
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
