import { gsap } from 'gsap';

export default defineNuxtPlugin((nuxtApp) => {
    let html = document.documentElement;
    let body = document.body;

    let scroller = {
        target: document.querySelector("#scroll-container"),
        ease: 0.2, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
    };

    let requestId = null;

    gsap.set(scroller.target, {
        rotation: 0.01,
        force3D: true
    });

    window.addEventListener("DOMContentLoaded", onLoad());

    function onLoad () {
        updateScroller();
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll); 
    }

    function updateScroller() {
    
        let resized = scroller.resizeRequest > 0;
            
        if (resized) {    
            let height = scroller.target.clientHeight;
            body.style.height = height + "px";
            scroller.resizeRequest = 0;
        }
            
        let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }
        
        gsap.set(scroller.target, { 
            y: -scroller.y 
        });
        
        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    function onScroll() {
        scroller.scrollRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    function onResize() {
        scroller.resizeRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }
});