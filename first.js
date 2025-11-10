/*class toyotaCar{
    constructor()
    {
        console.log("mera bhai pagal");

    }

    start()
    {
        console.log("start");

    }
    stop()
    {
        console.log("stop");

    }
    setBrand(brand)
{
    this.brand=brand;// brand is the parameter passing and this.brand is the property of object refers to current object
    console.log(this.brand);
}
}
    let fortuner=new toyotaCar();//constructor is invoked fisrt time
    fortuner.setBrand("fortuner");
    let xuv=new toyotaCar();//constructor is invoked second time
    xuv.setBrand("xuv");
    let tesla=new toyotaCar();///constructor is invoked third time
    tesla.setBrand("tesla");
    */
    
/*var swiper=new Swiper('.swiper',{
    direction:'horizontal',
    loop:true,
    effect:'fade',
    fadeEffect:{
        crossFade:true,
    },
    
        navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
   
    on:{
        init:function(){
            playActiveVideo();
        },
        slideChange:function(){
            pauseAllVideos();
            playActiveVideo();
        }

    }
});
function pauseAllVideos()
{
    document.querySelectorAll(".swiper-slide video").forEach(video=>{
        video.pause();
    });
}
function playActiveVideo()
{
   const activeVideo= document.querySelector(".swiper-slide-active video");
   if(activeVideo){
    activeVideo.currentTime=0;
    activeVideo.play();
   }
}
document.querySelectorAll(".vol-btn").forEach(btn=>{
    btn.addEventListener("click",function(){
        const video=this.parentElement.querySelector("video");
        video.muted=!video.muted;
        this.innerHTML=video.muted? '<i class="fas fa-volume-mute"></i>': '<i class="fas fa-volume-up"></i>';
    });
});*/
class VideoSwiper{
    constructor(selector)
    {
        this.container=document.querySelector(selector);//store the container(variable) element for this slider
       
       
        this.initSwiper();//intializing swiper
        this.setupVideos();//move from current video to next and add play button
       
    }
    initSwiper()
    {
    const swiper=new Swiper(this.container.querySelector(".videoSlide"),{
        autoplay:false,
            loop:true,
            navigation:{
                nextEl:this.container.querySelector(".swiper-button-next"),
                prevEl:this.container.querySelector(".swiper-button-prev"),
            },
        });
    }
    setupVideos()
    {
        //get all slide inside the slider
        const slides=this.container.querySelectorAll(".swiper-slide");
        slides.forEach((slide,index)=>{
            const video=slide.querySelector("video");//video element
            const volbtn=slide.querySelector(".vol-btn");//Volume button element
           video.currentTime=0;
                video.play();
               if(!video)
                return;
            let playB="play";
            video.addEventListener("click",()=>{
            if(playB==="play")
           {
                video.pause();
                playB="pause";
             }
             else{
             video.play();
            playB="play";
            
             }
              });
              volbtn.addEventListener("click",()=>{
                video.muted=!video.muted;
                volbtn.innerHTML=video.muted?'<i class="fas fa-volume-mute"></i>':'<i class="fas fa-volume-up"></i>';
              });
           
           
         video.addEventListener("ended",()=>{
            
           
            video.currentTime=0;
            video.play();
            //  if(index+1<slides.length)
            //  {//checking if not the last slide
                
            //     this.swiper.slideTo(index+1);//move to next slide
            //    const nextVideo=slides[index+1].querySelector("video");
            //    const nextBtn=slides[index+1].querySelector(".vol-btn");
            //    if(nextVideo)
            //    {  video.currentTime=0;
            //    nextVideo.play();
            // if(nextBtn)
            //   nextBtn.innerHTML=nextVideo.muted?'<i class="fas fa-volume-mute"></i>':'<i class="fas fa-volume-up"></i>';
            //    } }
            });
    });
    }
}
var videoSwipe=new VideoSwiper(".Raahgir",{autoplay:true});


