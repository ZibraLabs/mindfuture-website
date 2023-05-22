<template>
    <!-- <section class="w-screen border-t border-border">
        <div class="-rotate-90 origin-top-left w-[60vw] h-screen translate-y-[60vw] overflow-y-auto overflow-x-hidden bg-primary">
            <div class="w-screen h-[40vw] bg-section-background p-8 rotate-90 origin-top-left">
                <div class="flex items-stretch w-full h-full bg-body-light">
                    <div class="flex-1 bg-body-gray-light">
                    </div>
                    <div class="flex-1">
                    </div>
                </div>
            </div>
            <div class="w-screen h-[40vw] bg-section-background p-8">
                <div class="flex items-stretch w-full h-full bg-body-light">
                    <div class="flex-1 bg-body-gray-light">
                    </div>
                    <div class="flex-1">
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <section class="w-screen h-[40vw] overflow-auto border-t border-border scroll-smooth" v-jump-section>
        <div class="transition-all duration-300 ease-in-out">
            <div class="flex-none w-screen h-[40vw]">
                <div class="flex items-stretch w-full h-full bg-background">
                    <div class="flex-1 bg-body-gray-light text-3xl flex items-center justify-center">
                        Section1
                    </div>
                    <div class="flex-1">
                    </div>
                </div>
            </div>
            <div class="flex-none w-screen h-[40vw]">
                <div class="flex items-stretch w-full h-full bg-background">
                    <div class="flex-1 bg-body-gray-light text-3xl flex items-center justify-center">
                        Section2
                    </div>
                    <div class="flex-1">
                    </div>
                </div>
            </div>
            <div class="flex-none w-screen h-[40vw]">
                <div class="flex items-stretch w-full h-full bg-background">
                    <div class="flex-1 bg-body-gray-light text-3xl flex items-center justify-center">
                        Section3
                    </div>
                    <div class="flex-1">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>