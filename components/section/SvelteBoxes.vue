<template>
    <section class="w-full border-b border-border">
        <div class="relative w-full h-screen">
            <div class="absolute inset-0 pointer-events-none flex items-start justify-center pt-[20vw] pl-[6vw]">
                <div v-slideIn>
                    <h2 class="slideInRight">why not get in <span class="text-primary">touch</span>?</h2>
                    <h3 class="slideInLeft">and have fun with the gravity cubes</h3>
                    <FormButton class="mt-24 pointer-events-auto" href="mailto:info@mindfuture.com">contact us</FormButton>
                </div>
            </div>
            <iframe src="https://mindfuture-com-cube-animation.vercel.app/" class="w-full h-screen border-none"></iframe>
        </div>
    </section>
</template>

<!-- <template>
    <Boxes />
</template>

<script lang="ts">
    import { World } from 'svelte2vue-test';
    import toVue from 'svelte-adapter/vue';

    export default {
        components: {
            Boxes: toVue(World, {}, "div")
        }
    }
</script> -->