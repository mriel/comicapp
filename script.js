var comicSection = document.getElementById("comics");
var comicAPI = "https://api.shortboxed.com/comics/v1/new";

var request = new XMLHttpRequest();
request.open("GET", comicAPI , true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    console.log("success");
    var comicData = JSON.parse(request.responseText);
    myRequest(comicData.comics);
  } else {
    console.log(request.status + " " + "Error")
  }
};
request.send();

function myRequest(data){
  var htmlString = "";
  for (i = 0; i < data.length; i++){
    htmlString += "<h3 class='title'>" + data[i].title + "</h3>" +
                  "<p class='publisher'>" + data[i].publisher + "</p>" +
                  "<p class='description'>" + data[i].description + "</p>";
  };
  comicSection.insertAdjacentHTML("afterbegin", htmlString);
};
