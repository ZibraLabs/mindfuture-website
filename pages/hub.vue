<template>
    <div class="container mx-auto p-4 desktop-sm:p-12 space-y-6 desktop-sm:space-y-12">
        <div class="bg-section-background p-12">
            <div class="text-center leading-tight">
                <h2>MF <span class="text-secondary">HUB</span></h2>
            </div>
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
                    <h5 class="mt-12">Contact</h5>
                    <p>
                        Henriette Lundqvist<br />
                        <div class="flex flex-col desktop-sm:flex-row desktop-sm:items-center desktop-sm:space-x-4">
                            <a href="mailto:hll@mindfuture.com">hll@mindfuture.com</a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary h-8 w-8 hidden desktop-sm:block" viewBox="0 0 24 24"><path fill="currentColor" d="m6.05 19l5-7l-5-7H8.5l5 7l-5 7H6.05ZM12 19l5-7l-5-7h2.45l5 7l-5 7H12Z"/></svg>
                            <a href="tel:31192182">tlf: +45 31192182</a>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        <div class="relative">
            <div class="absolute inset-0 z-10"></div>
            <video src="@/assets/video/Hub2.mp4" controls autoplay="1" loop muted class="grayscale contrast-125"></video>
            <!-- <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/DUkGA-Lq0nc?si=TdylCduWg_ekXUMk&autoplay=1&loop=1&controls=0&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
        </div>
    </div>
</template>

<script>
    definePageMeta({
        layout: 'blank'
    });
</script>