const sample=document.querySelector('.sample');
const original=document.querySelector('.full-img');
const previews=document.querySelectorAll('.gallery img');
const caption=document.querySelector('.caption');


previews.forEach(function(image){
    image.addEventListener('click',function(){
        sample.style.opacity=1;
        sample.classList.add("open");
        const x=image.getAttribute('data-original');
        original.src=`${x}`;
    });
   
});

sample.addEventListener('click',function(e){
     if(e.target.classList.contains("sample"))
     {
         e.target.style.opacity=0;
         e.target.classList.remove("open");
     }
});


function scrollAppear()
{
    var introTexts=document.querySelectorAll('.intro-text');
    Array.from(introTexts).forEach(intro => {
        var introPosition=intro.getBoundingClientRect().top;
        var screenPosition=window.innerHeight/1.3;

        if (introPosition<screenPosition) {
            intro.classList.add('intro-appear');
        }
        
    });
    
}
window.addEventListener('scroll',scrollAppear)



