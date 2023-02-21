document.querySelector("#menuBar").onclick=()=>{
    document.querySelector("#menuBar").classList.toggle("fa-times");
    document.querySelector(".navigation ").classList.toggle("active");
}
window.onscroll=()=>{
    document.querySelector("#menuBar").classList.remove("fa-times");
    document.querySelector(".navigation ").classList.remove("active");
}


// Search Button
document.querySelector("#searchBtn").onclick=()=>{
    document.querySelector("#searchForm").classList.add("active");
}
document.querySelector("#closeSearch").onclick=()=>{
    document.querySelector("#searchForm").classList.remove("active");
}