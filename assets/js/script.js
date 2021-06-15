let images = [{
    url: "./assets/img/img1.jpg",
  }, {
    url: "./assets/img/img2.jpg",
  }, {
    url: "./assets/img/img3.jpg",
  }];

function initSlider(){
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".projects__content__second__col");
    let sliderArrows = document.querySelector(".arrow__btn");
    let sliderDots = sliderArrows.querySelector(".projects__indicators");
    let sliderLinks = document.querySelector(".projects__navigation");

    initImages();
    initArrows();
    initDots();
    initLinks();
    initAutoplay();


    function initImages(){
      images.forEach((image,index) => {
          let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
          sliderImages.innerHTML += imageDiv;  
      })
  }

  function initArrows(){
    sliderArrows.querySelectorAll(".init__arrow").forEach(arrow =>{
        arrow.addEventListener("click",function(){
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")){
            nextNumber = curNumber === 0? images.length - 1: curNumber - 1;
            } else {
                nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
        });
    });

}

function initDots(){
  images.forEach((image, index) => {
    let dot = `<div class = "indicator n${index} ${index === 0 ?"active" : ""}"
    data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".indicator").forEach(dot =>{
    dot.addEventListener("click",function(){
      moveSlider(this.dataset.index);
    })
  })
  }

  function initLinks(){
    images.forEach((image,index) => {
    let link = `<a class ="projects__navigation__item__link n${index} ${index === 0 ?"active__link" : ""}"
    data-index="${index}">Slider link ${index+1}</a>`;
    sliderLinks.innerHTML += link;
    });
    sliderLinks.querySelectorAll(".projects__navigation__item__link").forEach(link =>{
      link.addEventListener("click",function(){
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function moveSlider(num){
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  sliderDots.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".n" + num).classList.add("active");
  sliderLinks.querySelector(".active__link").classList.remove("active__link");
  sliderLinks.querySelector(".n" + num).classList.add("active__link");
  }

  function initAutoplay(){
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, 3000)
  }

}


document.addEventListener("DOMContentLoaded",initSlider);
