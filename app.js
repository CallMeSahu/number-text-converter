var txtInput = document.querySelector("#txt-input");
var btnConvert = document.querySelector("#btn-convert");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/numbers.json"

function getTranslationURL(inputText){
    return serverURL + "?text=" + inputText
}

function errorHandler(error){
    console.log("error", error);
    alert("Try again later!");
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var convertedText = json.contents.translated;
        txtOutput.innerText = convertedText;
    })
    .catch(errorHandler)
};

btnConvert.addEventListener("click", clickHandler);