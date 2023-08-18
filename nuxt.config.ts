// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        assetsInclude: ['**/*.mov'],
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0',
        }
    },
    css: ['~/assets/css/main.css', '~/assets/css/glitch.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: ['~/plugins/directive.js', { src: '~/plugins/gsap.js', mode: 'client' }],
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        vueI18n: './i18n.config.ts'
    }
})
