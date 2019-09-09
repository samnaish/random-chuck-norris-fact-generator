const randomFact = (callback) => {
    // call the Web Service
    const api = "https://api.chucknorris.io/jokes/random";
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        // what is this??
        if (this.readyState === 4 && this.status === 200) { // HTTP 200 response 
            try {
                callback(JSON.parse(this.responseText));
            } catch (err) {
                console.error(err);
            }
        }
    };

    request.open("GET", api, true); 
    request.send(); //Call Chuck Norris API for random facts
}

const parseResponse = (json) => {
    //JSON response - simple object with a value property contianing the random fact.
    const fact = "<b>" + json["value"] + "</b>";
    document.getElementById("data").innerHTML = fact;
}

document.getElementById("logo").addEventListener("click", function() {
    randomFact(parseResponse);
});

randomFact(parseResponse);