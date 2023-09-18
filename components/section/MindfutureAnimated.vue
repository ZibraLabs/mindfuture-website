<template>
    <section class="w-full p-8 desktop-sm:p-16 desktop-sm:pt-4">
        <div class="mb-24 flex desktop-sm:items-center desktop-sm:h-12 sticky-button-container">
            <FormButton class="sticky-button" href="mailto:info@mindfuture.com">Let's get in touch</FormButton>
        </div>
        <div class="desktop-sm:flex desktop-sm:items-center desktop-sm:justify-start w-full desktop-sm:space-x-12 space-y-4 desktop-sm:space-y-0">
            <div>
                <video src="@/assets/video/Mind.mp4" autoplay loop muted class="hidden desktop-sm:block desktop-sm:h-[11vw]"></video>
                <img src="@/assets/video/Mind-anim.gif" class="desktop-sm:hidden w-full" />
            </div>
            <div>
                <img src="@/assets/images/futuretext.svg" class="desktop-sm:h-[11vw]" />
            </div>
        </div>
    </section>
</template>