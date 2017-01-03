var request = new XMLHttpRequest();
request.open("GET", "https://api.shortboxed.com/comics/v1/new", true);
var data;
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    console.log("success");
    data = JSON.parse(request.responseText);
    document.getElementById("comics").innerHTML = "<h3> " + data.comics[0].title + " </h3>" +
                                                  "<p>" + data.comics[0].publisher + "</p>" +
                                                  "<p>" + data.comics[0].description + "</p>";
  } else {
    console.log(request.status + " " + "Error")
  }
};
request.send();
