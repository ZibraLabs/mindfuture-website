//  export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.vueApp.directive('parallax', {
//         mounted (el, binding) {
//             console.log(el, binding);
//         },
//     })
// });

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('parallax', {
        mounted (el, binding) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('is')
                        document.addEventListener('scroll', () => {
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
    })
});

const parallaxThis = function () {
    
}