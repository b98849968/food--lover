let menuBar = document.querySelector("#menu-bar");
let nev = document.querySelector("#nevs");
let content = document.querySelector("#content");
let links = document.querySelector("#link")
let links1 = document.querySelector("#link1")
let links2 = document.querySelector("#link2")
let links3 = document.querySelector("#link3")
let links4 = document.querySelector("#link4")
function showmenu(){
    menuBar.classList.toggle("fa-times");
    nev.classList.toggle("nav");
    content.classList.toggle("zndx");
}

links.onclick = function(){
    nev.classList.toggle("nav");
    content.classList.toggle("zndx");
    menuBar.classList.toggle("fa-times");
}
links1.onclick = function(){
    nev.classList.toggle("nav");
    content.classList.toggle("zndx");
    menuBar.classList.toggle("fa-times");
}
links2.onclick = function(){
    nev.classList.toggle("nav");
    content.classList.toggle("zndx");
    menuBar.classList.toggle("fa-times");
}
links3.onclick = function(){
    nev.classList.toggle("nav");
    content.classList.toggle("zndx");
    menuBar.classList.toggle("fa-times");
}
links4.onclick = function(){
    nev.classList.toggle("nav");
    content.classList.toggle("zndx");
    menuBar.classList.toggle("fa-times");
}