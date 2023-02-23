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

// Home Section Slider
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


  // Review Section Slider

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      640:{
        slidesPerView:2,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      }
    }
  });