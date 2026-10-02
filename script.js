let fname = document.querySelector("#fname");
let mname = document.querySelector("#mname").value;
let lname = document.querySelector("#lname").value;

let btn = document.querySelector("#submit");
function submition(){
    if(fname.value == "" || fname.value != NaN ){
    fname.style.border = "2px solid red";
}
}
btn.addEventListener("click", submition());
