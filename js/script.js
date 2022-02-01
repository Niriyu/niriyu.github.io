function toggleWeird() {
    var element = document.getElementById("toggle");
    element.classList.toggle("weird");
    Spinning();
}

var spinner = document.querySelector("#toggle");

function Spinning() {
    spinner.style.animationName = "example";
    setTimeout(function () {
        spinner.style.animationName = "";
        
    }, 4000);
    setTimeout(function (){
        document.getElementById("toggle").classList.toggle("weird");
    }, 4200)
};