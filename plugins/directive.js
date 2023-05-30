export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('parallax', {
        mounted (el, binding) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        document.addEventListener('scroll', () => {
                            let windowHeight = window.innerHeight;
                            let elementRect = el.getBoundingClientRect();

                            let elementPos = {
                                top: elementRect.top,
                                bottom: elementRect.bottom,
                                height: elementRect.height
                            }

                            if (elementPos.top < windowHeight && elementPos.bottom > 0) {
                                if (binding.value.percentMax) {
                                    let percentage = elementPos.bottom / (windowHeight + elementPos.height) * (binding.value.percentMax - binding.value.percentMin);
                                    percentage += binding.value.percentMin;

                                    if (binding.arg == 'x') {
                                        if (binding.value.direction && binding.value.direction == 'right') {
                                            el.style.transform = 'translateX(-' + percentage + '%)';
                                        } else if (binding.value.direction && binding.value.direction == 'left') {
                                            el.style.transform = 'translateX(' + percentage + '%)';
                                        }
                                    }
                                }
                            }
                        });
                    } else {
                        document.removeEventListener('scroll', null);
                    }
                });
            }, { threshold: [0, .25, .5, .75, 1] });

            observer.observe(el);
        }
    });

    nuxtApp.vueApp.directive('slideIn', {
        mounted (el, binding) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    let elements = el.querySelectorAll('.slideInLeft, .slideInRight');

                    if (entry.isIntersecting) {
                        elements.forEach((element, index) => {
                            setTimeout(() => {
                                element.classList.add('animate');
                            }, (index+1) * 300);
                        });
                    }
                    // else {
                    //     elements.forEach(element => {
                    //         element.classList.remove('animate');
                    //     });
                    // }
                });
            }, { threshold: [0, .25, .5, .75, 1] });

            observer.observe(el);
        }
    })

    nuxtApp.vueApp.directive('h-scroll', {
        mounted (el, binding) {
            el.addEventListener('wheel', (e) => {
                if (el.scrollLeft == 0 && e.deltaY < 0) {
                    return;
                }
                if (el.scrollLeft == el.clientWidth && e.deltaY > 0) {
                    return;
                }
                
                const race = 50;

                if (e.deltaY > 0) {
                    el.scrollLeft += race;
                } else {
                    el.scrollLeft -= race;
                }

                e.preventDefault();
            });
        }
    })

    nuxtApp.vueApp.directive('jump-section', {
        mounted (el, binding) {
            el.addEventListener('wheel', (e) => {
                if (el.scrollTop == 0 && e.deltaY < 0) {
                    return;
                }
                if (el.scrollTop >= (el.children[0].clientHeight - el.clientHeight) && e.deltaY > 0) {
                    return;
                }

                let elementRect = el.getBoundingClientRect();

                if (e.deltaY > 100) {
                    el.scrollTop += elementRect.height;
                } else if (e.deltaY < -100) {
                    el.scrollTop -= elementRect.height;
                }

                e.preventDefault();
            });
        }
    });

    // nuxtApp.vueApp.directive('parallax-mouse', {
    //     mounted (el, binding) {
    //         el.closest('section').addEventListener('mousemove', (e) => {
    //             let valueY = e.clientY - window.innerHeight / 2;
    //             let valueX = e.clientX - window.innerWidth / 2;

    //             el.style.transform = `translateY(${valueY * binding.value.y}px) translateX(${valueX * binding.value.x}px)`;
                
    //         });
    //     }
    // });

    // nuxtApp.vueApp.directive('scroll-smooth', {
    //     mounted (el, binding) {
    //         const scroll = new GScroll(el, 100);
    //         scroll.init();
    //         scroll.wheel();
    //     }
    // });
});