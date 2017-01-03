var request = new XMLHttpRequest();
request.open("GET", "https://api.shortboxed.com/comics/v1/new", true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    console.log("success");
    var data = JSON.parse(request.responseText);
    console.log(data.comics[1].title);
  } else {
    console.log(request.status + " " + "Error")
  }
};

request.send();
