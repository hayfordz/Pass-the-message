let input = document.getElementById("message-input")

let output = document.getElementById("message-output")

function getMessage(){
output.innerHTML = input.value;
input.value = " ";

}

input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        getMessage()
    }
})