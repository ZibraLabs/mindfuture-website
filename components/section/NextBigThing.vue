<template>
    <section class="w-full bg-section-background lg:h-[50vw] flex items-center justify-center relative p-4 py-12">
        <div v-slideIn class="space-y-8 lg:space-y-0 -mt-32">
            <h3 class="slideInLeft">we are bringing you</h3>
            <h2 class="slideInRight transition-all duration-100 ease-in-out">the <span class="text-primary">next</span> big thing</h2>
            <h3 class="slideInLeft hidden lg:inline-block">and this is how</h3>
        </div>
        <div class="absolute -bottom-2 left-1/4 text-primary h-[22vw]">
            <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-b from-body-dark to-transparent"></div>
                <svg stroke="currentColor" class="h-[22vw]" viewBox="0 0 229 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="moving-line" stroke-width="3" d="M220.65,0v208.91c0,22.09-17.91,40-40,40H40c-22.09,0-40,17.91-40,40v203.48" />
                </svg>
            </div>
        </div>
    </section>
</template>