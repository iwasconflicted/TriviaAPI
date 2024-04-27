
let triviaAnswer = document.getElementById("triviaAnswer");

async function option1API(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=20&category=21&difficulty=medium", {
    }).then(Response => Response.json());
    triviaAnswer.innerText = apiResponse.results["0"].question 
};

async function option2API(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=20&category=20&difficulty=medium", {
    }).then(Response => Response.json());
    triviaAnswer.innerText = apiResponse.results["0"].question
};

async function option3API(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=20&category=22&difficulty=medium", {
    }).then(Response => Response.json());
    triviaAnswer.innerText = apiResponse.results["0"].question
};

let option1 = document.getElementById("option1").addEventListener("click", function(){
    option1API();
});

let option2 = document.getElementById("option2").addEventListener("click", function(){
    option2API();
});

let option3 = document.getElementById("option3").addEventListener("click", function(){
    option3API();
});
