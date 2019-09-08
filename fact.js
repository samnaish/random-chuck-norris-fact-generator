const randomFact = () => {
    // call the Web Service
    let request = new XMLHttpRequest();
    let api = "https://api.chucknorris.io/jokes/random";
    request.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) { // HTTP 200 response 
            let json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };

    request.open("GET", api, true); 
    request.send(); //Call Chuck Norris API for random facts
}

const parseResponse = (json) => {
    //JSON response - simple object with a value property contianing the random fact.
    const fact = "<b>" + json["value"] + "</b>";
    getElementById("data").innerHTML = fact;
    document.getElementById("logo").addEventListener("click", function() {
        randomFact();
      });
}

randomFact();