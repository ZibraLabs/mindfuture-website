import { gsap } from 'gsap';
import { ScrollTrigger, CustomEase } from 'gsap/all';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default defineNuxtPlugin((nuxtApp) => {
    onNuxtReady((app) => {
        init();
    });

    function init () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollSmoother);
        gsap.registerPlugin(CustomEase);
    
        ScrollTrigger.normalizeScroll(true)
    
        // create the smooth scroller FIRST!
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });

        ScrollTrigger.defaults({
            toggleActions: 'restart pause reverse pause',
            scrub: true,
            markers: true,
        });

        growBox();

        parallaxGarage();
        videoMovement();
        parallaxMoveX('.hardware', 20);
        parallaxMoveX('.artificial', -20);
        parallaxMoveX('.software', 30);

        parallaxMoveY('.m2call-parallax', '-30%');
        parallaxMoveY('.easyid-nivo-parallax', '-30%');
        parallaxMoveY('.mindvision-parallax', '-60%');
    }

    function parallaxGarage () {
        gsap.to(".garage", {
            scrollTrigger: {
                trigger: '.garage-title',
                start: '0 100%',
                end: '100%',
                markers: false,
            }, // start the animation when ".box" enters the viewport (once)
            x: -200,
        });
    }

    function parallaxMoveX(element, amount) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: '0 100%',
                end: '100%',
                markers: false,
            }, // start the animation when ".box" enters the viewport (once)
            x: amount,
        })
    }

    function parallaxMoveY(element, amount) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: '0 100%',
                end: '+=100%',
                markers: false,
            }, // start the animation when ".box" enters the viewport (once)
            y: amount,
        })
    }

    function parallaxRotate (element, amount) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: '0 60%',
                end: '+=80%',
                markers: false,
            }, // start the animation when ".box" enters the viewport (once)
            rotate: amount,
        })
    }

    function videoMovement () {
        gsap.to('.animation-video', {
            duration: 3,
            scrollTrigger: {
                id: 'animation-video',
                trigger: '.animation-video-container',
                pin: '.animation-video',
                start: '0 30%',
                end: 'bottom top+=60%',
                markers: false,
            }
        });
        gsap.fromTo('.we-envision', {opacity: 0}, {
            opacity: 1,
            immediateRender: false,
            scrollTrigger: {
                id: 'we-envision-1',
                trigger: '.animation-video-container',
                start: 'top 65%',
                end: '+=20%',
                markers: false,
            }
        });
        gsap.fromTo('.we-envision', {opacity: 1}, {
            opacity: 0,
            immediateRender: false,
            scrollTrigger: {
                id: 'we-envision-0',
                trigger: '.animation-video-container',
                start: '50% 80%',
                end: '+=20%',
                markers: false,
            }
        });
        gsap.fromTo('.we-connect', {opacity: 0}, {
            opacity: 1,
            immediateRender: false,
            scrollTrigger: {
                id: 'we-connect-1',
                trigger: '.animation-video-container',
                start: '50% 80%',
                end: '+=20%',
                markers: false,
            }
        });
        gsap.fromTo('.we-connect', {opacity: 1}, {
            opacity: 0,
            immediateRender: false,
            scrollTrigger: {
                id: 'we-connect-0',
                trigger: '.animation-video-container',
                start: '85% 80%',
                end: '+=20%',
                markers: false,
            }
        });
        gsap.fromTo('.we-create', {opacity: 0}, {
            opacity: 1,
            immediateRender: false,
            scrollTrigger: {
                id: 'we-create-1',
                trigger: '.animation-video-container',
                start: '85% 80%',
                end: '+=20%',
                markers: false,
            }
        });
        gsap.fromTo('.we-create', {opacity: 1}, {
            opacity: 0,
            immediateRender: false,
            scrollTrigger: {
                id: 'we-create-1',
                trigger: '.animation-video-container',
                start: '120% 80%',
                end: '+=20%',
                markers: false,
            }
        });
    }

    function growBox () {
        gsap.to('.pillar-box', {
            scale: '102',
            duration: 3,
            ease: CustomEase.create("custom", "M0,0 C0.438,0.198 0.5,0.604 0.616,0.738 0.719,0.857 0.78,1 1,1 "),
            scrollTrigger: {
                id: 'growBox',
                trigger: '.pillar-box-section',
                start: '-30% 60%',
                end: '+=60%',
                markers: false,
            },
        });
        
        gsap.to('.pillar-text', {
            opacity: 1,
            scrollTrigger: {
                id: 'growBoxText',
                trigger: '.pillar-box-section',
                start: '-20% 45%',
                end: '+=10%',
                markers: false,
            },
        });
    }
});