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
                                bottom: elementRect.bottom
                            }

                            if (elementPos.top < windowHeight && elementPos.bottom > 0) {
                                if (binding.value.percentMax) {
                                    let percentage = elementPos.top / windowHeight * binding.value.percentMax;
                                    percentage + binding.value.percentMin;

                                    if (binding.arg == 'x') {
                                        if (binding.value.direction && binding.value.direction == 'right') {
                                            el.style.transform = 'translateX(-' + percentage + '%)';
                                        } else if (binding.value.direction && binding.value.direction == 'left') {
                                            el.style.transform = 'translateX(' + percentage + '%)';
                                        }
                                    }
                                }


                            }

                            // console.log('top', el.getBoundingClientRect().top)
                            // console.log('scroll', (window.scrollY + window.innerHeight));
                            // console.log(Math.round(entry.intersectionRatio * 100), window.scrollY, el, binding);
                        });
                    } else {
                        console.log('is not')
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
                    console.log('go up');
                    return;
                }
                
                if (el.scrollLeft == el.clientWidth && e.deltaY > 0) {
                    console.log('go down');
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
});