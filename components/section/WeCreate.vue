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
    <section class="overflow-auto w-screen" v-h-scroll>
        <div class="flex flex-nowrap border-t border-border">
            <div class="flex-none w-screen h-[40vw]">
                <div class="flex items-stretch w-full h-full bg-background">
                    <div class="flex-1 bg-body-gray-light">
                    </div>
                    <div class="flex-1">
                    </div>
                </div>
            </div>
            <div class="flex-none w-screen h-[40vw]">
                <div class="flex items-stretch w-full h-full bg-background">
                    <div class="flex-1 bg-body-gray-light">
                    </div>
                    <div class="flex-1">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>