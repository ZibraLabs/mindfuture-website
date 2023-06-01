import { gsap } from 'gsap';
import { ScrollSmoother, ScrollTrigger, CustomEase } from 'gsap/all';

export default defineNuxtPlugin((nuxtApp) => {
    onNuxtReady((app) => {
        init();
    });

    function init () {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase);
    
        ScrollTrigger.normalizeScroll(true)
    
        // create the smooth scroller FIRST!
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });

        ScrollTrigger.defaults({
            toggleActions: 'restart pause reverse pause',
            scrub: true,
            markers: false,
        });

        growBox();

        parallaxGarage();
        parallaxBuildStuff('.hardware', 20);
        parallaxBuildStuff('.artificial', -20);
        parallaxBuildStuff('.software', 30);
    }

    function parallaxGarage () {
        gsap.to(".garage", {
            scrollTrigger: {
                trigger: '.garage-title',
                start: '0 100%',
                end: '100%',
                toggleActions: 'restart pause reverse pause',
            }, // start the animation when ".box" enters the viewport (once)
            x: -200,
        });
    }

    function parallaxBuildStuff(element, amount) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: '0 100%',
                end: '100%',
                toggleActions: 'restart pause reverse pause',
            }, // start the animation when ".box" enters the viewport (once)
            x: amount,
        })
    }

    function growBox () {
        gsap.to('.pillar-box', {
            scale: '102',
            duration: 3,
            ease: CustomEase.create("custom", "M0,0 C0.438,0.198 0.5,0.604 0.616,0.738 0.719,0.857 0.78,1 1,1 "),
            scrollTrigger: {
                id: 'growBox',
                trigger: '.pillar-box-section',
                start: '0 40%',
                end: '+=30%',
            },
        });
        
        gsap.to('.pillar-text', {
            opacity: 1,
            scrollTrigger: {
                id: 'growBoxText',
                trigger: '.pillar-box-section',
                start: '22% 45%',
                end: '+=10%',
            },
        });
    }
});