document.getElementById('bar').onclick = function(){
    let myLinks = document.getElementsByTagName("nav")[0];
    let dataDiv = document.getElementById("data-div");
    myLinks.classList.toggle("h");
    dataDiv.classList.toggle("w100");
}

document.getElementById('set').onclick = function(){
    document.getElementById('icon-arrow').classList.toggle("ro")
    document.getElementById('sub-ul').classList.toggle("h-s")
}