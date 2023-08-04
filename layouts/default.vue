<template>
    <div id="smooth-wrapper">
        <div class="fixed top-[1.85rem] lg:top-12 inset-x-8 lg:inset-x-16 z-50">
            <img src="@/assets/images/mflogo.svg" class="h-6 lg:h-10" alt="">
        </div>
        <div id="smooth-content">
            <slot />
        </div>
    </div>
</template>