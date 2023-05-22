<template>
    <section class="w-full">
        <div class="relative w-full h-[70vw]">
            <div class="absolute inset-0 pointer-events-none flex items-start justify-center pt-[20vw]">
                <div v-slideIn>
                    <h2 class="slideInRight">why not get in <span class="text-primary">touch</span>?</h2>
                    <h4 class="slideInLeft">and have fun with the gravity cubes</h4>
                    <Button class="mt-24 pointer-events-auto">contact us</Button>
                </div>
            </div>
            <iframe src="https://mf-cube-animation.vercel.app/" class="w-full h-[70vw] border-none"></iframe>
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