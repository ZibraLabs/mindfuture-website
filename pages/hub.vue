<template>
    <div class="container mx-auto p-4 desktop-sm:p-12 space-y-6 desktop-sm:space-y-12">
        <div class="bg-section-background p-12">
            <div class="text-center leading-tight">
                <h2>MF <span class="text-secondary">HUB</span></h2>
            </div>
        </div>
        <div class="relative bg-body-gray-dark w-full aspect-video">
            <div class="absolute inset-0 z-10"></div>
            <video src="@/assets/video/Hub2.mp4" controls="false" autoplay="1" loop muted class="grayscale contrast-125"></video>
        </div>
        <div class="grid desktop-sm:grid-cols-2 grid-cols-1 gap-6 desktop-sm:gap-12">
            <div class="bg-button-background p-4 desktop-sm:p-12 aspect-square flex items-center justify-center">
                <div class="space-y-4 desktop-sm:space-y-8">
                    <h4 class="uppercase text-secondary">Working at Mindfuture Hub</h4>
                    <ul class="space-y-4 desktop-sm:space-y-8">
                        <li class="flex items-center space-x-4">
                            <div class="w-4 wide:w-[0.5vw] aspect-square bg-primary"></div>
                            <div>Unique startup community</div>
                        </li>
                        <li class="flex items-center space-x-4">
                            <div class="w-4 wide:w-[0.5vw] aspect-square bg-primary"></div>
                            <div>Your own permanent office space</div>
                        </li>
                        <li class="flex items-center space-x-4">
                            <div class="w-4 wide:w-[0.5vw] aspect-square bg-primary"></div>
                            <div>Inspiring meeting facilities</div>
                        </li>
                        <li class="flex items-center space-x-4">
                            <div class="w-4 wide:w-[0.5vw] aspect-square bg-primary"></div>
                            <div>Complete catering service ( 1500,- DKK + VAT/mth )</div>
                        </li>
                        <li class="flex items-center space-x-4">
                            <div class="w-4 wide:w-[0.5vw] aspect-square bg-primary"></div>
                            <div>State of the art event facilities</div>
                        </li>
                        <li class="flex items-center space-x-4">
                            <div class="w-4 wide:w-[0.5vw] aspect-square bg-primary"></div>
                            <div>Close to freeway and public transport</div>
                        </li>
                        <li class="flex items-center space-x-4">
                            <div class="w-4 wide:w-[0.5vw] aspect-square bg-primary"></div>
                            <div>Networking and social events</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-2 border-border p-4 desktop-sm:p-12 aspect-square flex items-center justify-center">
                <div>
                    <h4 class="uppercase text-secondary">Join us in the<br class="block desktop-sm:hidden" /> MindFuture Hub</h4>
                    <h3 class="mt-12 text-body-gray-dark">Workspace</h3>
                    <div class="flex items-baseline space-x-4"><h2 class="text-primary">2.900,- <h5 class="text-body-light">DKK + VAT/mth</h5></h2></div>
                    <h5 class="mt-6">Contact</h5>
                    <p>
                        Henriette Lundqvist<br />
                        <div class="flex flex-col desktop-sm:flex-row desktop-sm:items-center desktop-sm:space-x-4">
                            <a href="mailto:hll@mindfuture.com">hll@mindfuture.com</a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary h-8 w-8 hidden desktop-sm:block" viewBox="0 0 24 24"><path fill="currentColor" d="m6.05 19l5-7l-5-7H8.5l5 7l-5 7H6.05ZM12 19l5-7l-5-7h2.45l5 7l-5 7H12Z"/></svg>
                            <a href="tel:31192182">tlf: +45 31192182</a>
                        </div>
                    </p>
                    <p>Erik Husfeldts Vej 7, 2630 Taastrup</p>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 w-full gap-6 desktop-sm:gap-12">
            <div @click="toggleScaleClass" class="cursor-zoom-in relative">
                <!-- <img src="@/assets/images/hub/0.jpg" class="object-cover absolute z-50" /> -->
                <img src="@/assets/images/hub/0.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/1.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/2.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/3.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/4.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/5.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/6.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/7.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/8.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/9.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/10.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/11.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/12.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/13.jpg" class="object-cover grayscale w-full h-full" />
            </div>
            <div @click="toggleScaleClass" class="cursor-zoom-in">
                <img src="@/assets/images/hub/14.jpg" class="object-cover grayscale w-full h-full" />
            </div>
        </div>
        <div>
            <iframe src="https://my.matterport.com/show/?m=J3keVFZGoGr&play=1" frameborder="0" allowfullscreen allow="xr-spatial-tracking" class="w-full h-[800px]"></iframe>
        </div>
    </div>
</template>

<script>
    definePageMeta({
        layout: 'blank'
    });

    export default {
        methods: {
            toggleScaleClass (event) {
                let target = event.currentTarget;

                target.classList.toggle('scaledUp');
            }
        }
    }
</script>

<style>
    .scaledUp {
        @apply !fixed inset-x-[4vw] inset-y-[6vh] !cursor-zoom-out;
        z-index: 999;
    }
</style>