
let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("hero-section");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000);
}


 const animatedText = document.getElementById('animatedText');

 anime.timeline({ loop: false })
   .add({
     targets: '#animatedText',
     opacity: [0, 1],
     translateY: [20, 0],
     easing: 'easeOutExpo',
     duration: 1000, 
   });
   
   const animated = document.getElementById('animated');

   anime.timeline({ loop: false })
     .add({
       targets: '#animated',
       opacity: [0, 1],
       translateX: [20, 0],
       easing: 'easeOutExpo',
       duration: 3000, 
     });

     const animatedCard = document.getElementById('animatedCard');

    
     setTimeout(() => {
       animatedCard.classList.add('animated');
     }, 1000);