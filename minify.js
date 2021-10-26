function minify(){
    console.log("You pressed the Minimize button!");

    var inputText = document.getElementById("input").value;
    var outputText = document.getElementById("output").value;

    var newOutputText;

    if(inputText == "" || inputText == " ") {
        newOutputText = inputText;
    } else {
        newOutputText = removeColonSpacing(inputText);
        newOutputText = removeLastSemicolonsSpaces(newOutputText);
        newOutputText = removeFirstSemicolonSpaces(newOutputText);
        newOutputText = removeEndTags(newOutputText);
        newOutputText = removeEmptyLines(newOutputText);
        console.log(outputText);
    }

    document.getElementById("output").value = newOutputText;

}

function removeEmptyLines(input){
    var output = input.replace(/^\s*[\r\n]/gm, '');
    return output;
}

function removeEndTags(input){
    var output = input.replace(/;?\s*}?\s?;?<\/style>\s*/gm, '');
    return output;
}

function removeLastSemicolonsSpaces(input){
    var output = input.replace(/;?\s*}\s*/gm, '}');
    output = input.replace(/;\s*/gm, ';');
    output = input.replace(/}\s*/gm,'}');
    return output;
}

function removeFirstSemicolonSpaces(input){  
    var output = input.replace(/\s?{\s*/gm, '{');
    return output;
}
function removeColonSpacing(input) {
    var output = input.replace(/: /gm, ':');
    return output;
}

function copyToClipboard(){
    var outputText = document.getElementById("output").value;
    navigator.clipboard.writeText(outputText.value);
}
