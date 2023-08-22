import { gsap, Power2 } from 'gsap';
import { ScrollTrigger, CustomEase, DrawSVGPlugin } from 'gsap/all';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default defineNuxtPlugin((nuxtApp) => {
    onNuxtReady((app) => {
        // init();
        moveLogo();
    });

    function init () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollSmoother);
        gsap.registerPlugin(CustomEase);
        gsap.registerPlugin(DrawSVGPlugin);
    
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

        let mm = gsap.matchMedia();

        // DESKTOP
        mm.add("(min-width: 800px)", () => {
            // moveLogo();
            colorLogo();
            growBox();
            growingLine();
            movingLine();

            textAppear();

            stickyButton();
    
            parallaxGarage();
            videoMovement();
            parallaxMoveX('.hardware', 50);
            parallaxMoveX('.artificial', -50);
            parallaxMoveX('.software', 80);
    
            parallaxMoveY('.m2call-parallax', '-30%');
            parallaxMoveY('.easyid-nivo-parallax', '-15%');
            parallaxMoveY('.mindvision-parallax', '-50%');
        });

        // MOBILE
        mm.add("(max-width: 799px)", () => {
            growBoxMobile();
    
            parallaxGarageMobile();
            textAppear();
            movingLine();

            // videoMovement();
            parallaxMoveX('.hardware', 20);
            parallaxMoveX('.artificial', -20);
            parallaxMoveX('.software', 30);

            stickyButtonMobile();
    
            // parallaxMoveY('.m2call-parallax', '-30%');
            // parallaxMoveY('.easyid-nivo-parallax', '-30%');
            // parallaxMoveY('.mindvision-parallax', '-60%');
        });
    }

    function colorLogo () {
        gsap.to('#main-logo', {
            duration: 3,
            scrollTrigger: {
                id: 'color-logo',
                trigger: '.garage-container',
                start: '-48px top',
                end: 'bottom-=48px top',
                markers: false,
                toggleClass: {
                    className: 'text-background',
                    targets: '#main-logo'
                }
            }
        });
    }

    function moveLogo () {
        let loadingBar = document.querySelector('#loading-bar-fill');

        const timeline = gsap.timeline();

        timeline.to("#loading-bar-fill", {
            duration: 1.5,
            width: "100%",
            onUpdate: () => {
                document.querySelector('#loading-amount').innerHTML = parseInt(loadingBar.style.width) + '%';
            },
        }, 0).to("#loading-bar-content", {
            duration: 0.8,
            opacity: 0,
        }, "+=0.2").to("#logo-load", {
            duration: 1.5,
            x: 64,
            y: 48,
            width: 82.5,
            height: 40,
            transformOrigin: "top left",
            ease: Power2.easeInOut,
            onComplete: () => {
                init();
            },
        }, "+=0").to('#loading-full', {
            duration: 1.2,
            height: 0,
            ease: Power2.easeInOut,
        }, "-=1");
    }

    function textAppear () {
        ScrollTrigger.batch('.text-appear', {
            interval: 0.1,
            id: 'text-appear',
            trigger: '.text-appear-container',
            start: 'top 90%',
            end: 'bottom',
            markers: false,
            toggleClass: 'text-appear--visible',
        });
    }

    function movingLine () {
        gsap.from('.moving-line',{
            scrollTrigger: {
                trigger: '.moving-line',
                start: '-50% 75%',
                end: 'bottom 50%',
                markers: false,
            },
            ease: "none",
            drawSVG:"0% 0%"
        });
    }

    function stickyButton () {
        gsap.to('.sticky-button', {
            scrollTrigger: {
                id: 'sticky-button-pin',
                trigger: '.sticky-button-container',
                pin: '.sticky-button',
                start: 'top top',
                end: 99999,
                markers: false,
            }
        });

        gsap.to('.sticky-button', {
            duration: 3,
            scrollTrigger: {
                id: 'sticky-button-move',
                trigger: '.sticky-button-container',
                start: '-140px',
                end: 99999,
                markers: false,
                toggleClass: {
                    className: 'sticky-button--scrolled',
                    targets: '.sticky-button'
                }
            }
        });
    }

    function stickyButtonMobile () {
        gsap.to('.sticky-button', {
            scrollTrigger: {
                id: 'sticky-button-pin',
                trigger: '.sticky-button-container',
                pin: '.sticky-button',
                start: 'top top',
                end: 99999,
                markers: false,
            }
        });

        gsap.to('.sticky-button', {
            duration: 3,
            scrollTrigger: {
                id: 'sticky-button-move',
                trigger: '.sticky-button-container',
                start: '-20px',
                end: 99999,
                markers: false,
                toggleClass: {
                    className: 'sticky-button--scrolled',
                    targets: '.sticky-button'
                }
            }
        });
    }

    function parallaxGarage () {
        gsap.to(".garage", {
            scrollTrigger: {
                trigger: '.garage-title',
                start: '0 100%',
                end: '100%',
                markers: false,
            },
            x: -200,
        });
    }

    function parallaxGarageMobile () {
        gsap.to(".garage", {
            scrollTrigger: {
                trigger: '.garage-container',
                start: '0 100%',
                end: '100%',
                markers: false,
            },
            x: -100,
        });
    }

    function parallaxMoveX(element, amount) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: '0 100%',
                end: '100%',
                markers: false,
            },
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
            },
            y: amount,
        })
    }

    function videoMovement () {
        let videoContainer = document.querySelector('.animation-video-container');

        gsap.to('.animation-video', {
            duration: 3,
            scrollTrigger: {
                id: 'animation-video',
                trigger: '.animation-video-container',
                pin: '.animation-video',
                start: '0 30%',
                end: videoContainer.clientHeight + 'px-=6% top+=60%',
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

    function growingLine () {
        let parentContainer = document.querySelector('.growing-line').parentNode;

        gsap.to('.growing-line', {
            height: parentContainer.clientHeight,
            ease: CustomEase.create("custom", "M0,0 C0.438,0.198 0.5,0.604 0.616,0.738 0.719,0.857 0.78,1 1,1 "),
            scrollTrigger: {
                id: 'growingLine',
                trigger: '.growing-line',
                start: '0% 70%',
                end: parentContainer.clientHeight + 'px',
                markers: false,
            },
        });
    }

    function growBox () {
        gsap.to('.pillar-box', {
            width: '100vw',
            height: '100vh',
            duration: 3,
            ease: CustomEase.create("custom", "M0,0 C0.438,0.198 0.5,0.604 0.616,0.738 0.719,0.857 0.78,1 1,1 "),
            scrollTrigger: {
                id: 'growBox',
                trigger: '.pillar-box-section',
                start: '20% 60%',
                end: '+=40%',
                markers: false,
            },
        });
        
        gsap.to('.pillar-text', {
            opacity: 1,
            scrollTrigger: {
                id: 'growBoxText',
                trigger: '.pillar-box-section',
                start: '30% 45%',
                end: '+=10%',
                markers: false,
            },
        });
    }
    
    function growBoxMobile () {
        gsap.to('.pillar-box', {
            scale: '122',
            duration: 3,
            ease: CustomEase.create("custom", "M0,0 C0.438,0.198 0.5,0.604 0.616,0.738 0.719,0.857 0.78,1 1,1 "),
            scrollTrigger: {
                id: 'growBox',
                trigger: '.pillar-box-section',
                start: '-30% 50%',
                end: '+=60%',
                markers: false,
            },
        });
        
        gsap.to('.pillar-text', {
            opacity: 1,
            scrollTrigger: {
                id: 'growBoxText',
                trigger: '.pillar-box-section',
                start: '-20% 20%',
                end: '+=30%',
                markers: false,
            },
        });
    }
});