export default class Request {

    static getCategories() {
        const url = 'https://opentdb.com/api_category.php';
        return fetch(url)
    }

    static getQuestions() {

        const totalQuestions = document.getElementById("total-questions").value;
        const difficulty = document.getElementById("select-difficulty").value;
        const type = document.getElementById("select-type").value;
        const category = document.getElementById("select-category").value;
        const url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`;
    
        return fetch(url)
       
    }

}
