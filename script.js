let img = document.getElementById("img");

const b1  = document.getElementById("b1");
const b2  = document.getElementById("b2");
const b3  = document.getElementById("b3");
const b4  = document.getElementById("b4");
const buttons = [b1,b2,b3,b4];

const res = document.getElementById("resultText");

var correctButton = Math.floor(Math.random(465) * buttons.length);

const httpStatusCodes = [
    100, 101, 200, 201, 202, 204,
    206, 300, 301, 302, 303, 304,
    307, 400, 401, 403, 404, 405,
    406, 408, 409, 410, 411, 412,
    413, 414, 415, 416, 429, 500,
    501, 502, 503, 504, 505
];

const httpStatusNames = [
    "Continue", "Switching Protocols", "OK", "Created", "Accepted", "No Content",
    "Partial Content", "Multiple Choices", "Moved Permanently", "Found", "See Other",
    "Not Modified", "Temporary Redirect", "Bad Request", "Unauthorized", "Forbidden",
    "Not Found", "Method Not Allowed", "Not Acceptable", "Request Timeout", "Conflict",
    "Gone", "Length Required", "Precondition Failed", "Payload Too Large",
    "URI Too Long", "Unsupported Media Type", "Range Not Satisfiable", "Too Many Requests",
    "Internal Server Error", "Not Implemented", "Bad Gateway", "Service Unavailable",
    "Gateway Timeout", "HTTP Version Not Supported"
];

vote(0);

function vote(voting){

    console.log(correctButton + " // " + (voting -1));

    if(correctButton === voting-1 || voting === 0){
        res.innerHTML = "Helyes";
    } else {
        res.innerHTML = "Helytelen";
    }


    //gen New
    correctButton = Math.floor(Math.random() * buttons.length);
    const curRandom  = Math.floor(Math.random(789) * httpStatusCodes.length);
    const curRandomCode = httpStatusCodes[curRandom];
    const curRandomName = httpStatusNames[curRandom];
    console.log(correctButton);
    console.log(curRandomName);
    console.log(curRandomCode);

    img.src = "https://http.dog/"+curRandomCode+".jpg";

    // Create an array to keep track of used indexes
    const usedIndexes = [curRandomName];

    function getRandomUniqueStatusName() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * httpStatusNames.length);
        } while (usedIndexes.includes(randomIndex)); // Keep generating a new index until it's unique

        usedIndexes.push(randomIndex); // Add the index to the usedIndexes array
        return httpStatusNames[randomIndex]; // Return the corresponding status name
    }

    for (let i = 0; i < buttons.length; i++) {
        if(correctButton === i)
            buttons[correctButton].innerHTML = curRandomName;
        else
            buttons[i].innerHTML = getRandomUniqueStatusName();
    }



}