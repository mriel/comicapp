var request = new XMLHttpRequest();
request.open("GET", "https://api.shortboxed.com/comics/v1/new", true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    console.log("success");
    var data = JSON.parse(request.responseText);
    document.getElementById("title").innerHTML = data.comics[0].title;
    document.getElementById("publisher").innerHTML = data.comics[0].publisher;
    document.getElementById("description").innerHTML = data.comics[0].description;
  } else {
    console.log(request.status + " " + "Error")
  }
};
request.send();
