const logtxt = document.getElementById("logtxt")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const signtxt = document.getElementById("signtxt")
const b = document.getElementById("log")
const a = document.getElementById("si")
function sign() {
    a.style.left = "0vw";
    a.style.top = "0vw";
    b.style.display = "none";
    a.style.display = "block";
    logtxt.style.display = "none";
    signtxt.style.display = "block";
    btn1.style.backgroundColor = "maroon";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "white";
    btn2.style.color = "black";
}
function login() {
    a.style.display = "none";
    b.style.display = "block";
    logtxt.style.display = "block";
    signtxt.style.display = "none";
    btn2.style.backgroundColor = "maroon";
    btn2.style.color = "white";
    btn1.style.backgroundColor = "white";
    btn1.style.color = "black";
}
    function show() {
        var x = document.getElementById("pas");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
