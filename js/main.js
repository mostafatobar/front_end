let bar_box = document.getElementById('bar-box');
let link_box = document.getElementById('link-box');
let data_box = document.getElementById('data-box');
bar_box.onclick = function(){
    link_box.classList.toggle("w-0");
    data_box.classList.toggle("w-100");
    link_box.children[0].classList.toggle("h-s");
    link_box.children[1].classList.toggle("h-s");
}

let profile_btn = document.getElementById('pro-btn');
let arrow_icon = document.getElementById('icon-arrow');
let out_link = document.getElementById('out-link');
profile_btn.onclick = function(){
    out_link.classList.toggle("h-s");
    arrow_icon.classList.toggle("ro")
}   

let page_title = document.getElementsByClassName("page-title")[0].innerHTML;
let all_links = document.querySelectorAll("nav a");
const pages_titles = [
    "Dashboard",
    "Table",
    "Form"
];

for(let i = 0; i < pages_titles.length; i++){
    if( page_title.includes(pages_titles[i])){
        for( let a = 0; a < all_links.length; a++ ){
            all_links[a].classList.remove("act");
            all_links[i].classList.add("act")
        }
    }
}