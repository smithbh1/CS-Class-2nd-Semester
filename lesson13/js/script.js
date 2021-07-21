const hambutton = document.querySelector(".ham_menu");
const mainnav = document.querySelector(".navigation")

hambutton.addEventListener("click", () => 
{mainnav.classList.toggle("responsive")}, false);


let header = document.querySelector(".navigation");
let links = header.querySelector(".link");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      });
    }

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 40px 0px"
}
if('IntersectionObserver' in window) {

    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });

  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

  let modiDate = new Date(document.lastModified);
  let showAs = (modiDate.getMonth() + 1) + "-" + modiDate.getDate() + "-" + modiDate.getFullYear();
  document.querySelector("#lastModified").textContent = showAs;
    
