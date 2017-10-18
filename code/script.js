var title = document.getElementById("title");
var description = document.getElementById("opening_crawl");
var release_date = document.getElementById("release_date");
(function() {
  
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);
 
  var httpRequest;

  function makeRequest() {
    httpRequest = new XMLHttpRequest();
   
    if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
    httpRequest.onreadystatechange = fillInfo;
    httpRequest.open(
      "GET", "https://swapi.co/api/films/1/"
    );
    httpRequest.send();
  }

  function fillInfo() {
 
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          
       responseContent = httpRequest.responseText;                  
        console.log(responseContent);

         var parsed = JSON.parse(responseContent);

         console.log(parsed.title);
        console.log(parsed.opening_crawl);
        console.log(parsed.release_date)

         title.innerHTML = parsed.title;
        opening_crawl.innerHTML = parsed.opening_crawl; 
        release_date.innerHTML = parsed.release_date;
      } else {
        alert("There was a problem with the request.");
      }
    }
  }
})();
