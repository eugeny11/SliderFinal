let images = [{
    url: "https://img.favcars.com/mini/hatch/mini_hatch_2010_wallpapers_14_1280x960.jpg",
    title: " Mini Cooper черный Mini Cooper черный Mini Cooper черный Mini Cooper черный Mini Cooper черный"
  }, {
    url: "https://img.favcars.com/mini/cabrio/mini_cabrio_2009_pictures_5_1280x960.jpg",
    title: "Mini Cooper красный"
  }, {
    url: "https://www.t-r-n.ru/files/modification-images/cb/a8/5c/f9/40061_tmb940.jpg",
    title: "Mini Cooper синий"
  }, {
    url: "https://i.pinimg.com/736x/c5/d9/14/c5d9142556fe74c49a2c1c2d4ea6d46a.jpg",
    title: "Mini Cooper бордовый"
  }, {
    url: "https://i.pinimg.com/originals/48/01/d2/4801d29679757d8c5d5af1d02fd370a1.jpg",
    title: "Mini Cooper белый"
}];

function initSlider(){
    if (!images || !images.length) return;
    

    let sliderImages = document.querySelector('.projects__img');
    let sliderArrows = document.querySelector('.arrow__btn');
    let sliderDots = document.querySelector('.projects__indicators');

    initImages();
    initArrows();

    if (options.dots){
    initDots();
    }

    if (options.autoplay){
        initAutoplay();
    }

    function initImages() {
        images.forEach((image, index) => {
          let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
          sliderImages.innerHTML += imageDiv;
        });
      };

    function initArrows(){
            sliderArrows.querySelectorAll(".arrow").forEach(arrow =>{
            arrow.addEventListener("click",function(){
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("arrow-left")){
                nextNumber = curNumber === 0? images.length - 1: curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    
    }


    function moveSlider(num){
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        changeTitle(num);
            }

}

let sliderOptions = {
    dots: true,
    autoplay: true,
    autoplayInterval: 3000
  };
  

  document.addEventListener("DOMContentLoaded",initSlider);
