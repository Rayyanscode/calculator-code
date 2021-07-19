var a=document.getElementById("para")
function cal(num) {
    a.value +=num
    
}
function result() {
    a.value=eval(a.value)
    
}

function restart() {
    a.value=" "
    
}
