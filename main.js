import Request from "./classes/request.js";
import UI from "./classes/UI.js"

const formQuestions=document.getElementById("form-questions");
const formContainerQuestions=document.getElementById("container-questions");

Request.getCategories()
    .then((response) => response.json())
    .then((data) => UI.printCategories(data.trivia_categories))


formQuestions.addEventListener("submit", (event)=>{

    event.preventDefault();
    Request.getQuestions()
        .then((response) => response.json())
        .then((data) => UI.printQuestions(data))
    
});

formContainerQuestions.addEventListener("submit", (event)=>{
    event.preventDefault();
    UI.score();
})


