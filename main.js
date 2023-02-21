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

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop:true,
  });