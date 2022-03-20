async function generate_url(){
    var data = document.getElementById("url").value

    var result = await eel.generate_url(data)(setOutput);
    console.log(result)


}

async function setOutput(outPutText){

    document.getElementById("output-url").value = outPutText
}