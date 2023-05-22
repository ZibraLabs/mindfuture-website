<template>
    <section class="w-full bg-section-background h-[50vw] flex items-center justify-center relative">
        <div v-slideIn>
            <h3 class="slideInLeft">we are bringing you</h3>
            <h2 class="slideInRight" v-parallax-mouse="{y: -0.025, x: -0.04}">the <span class="text-primary">next</span> big thing</h2>
            <h3 class="slideInLeft">and this is how</h3>
        </div>
    </section>
</template>