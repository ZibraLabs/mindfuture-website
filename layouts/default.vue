<template>
    <div id="smooth-wrapper">
        <div class="fixed top-[1.85rem] desktop-sm:top-12 inset-x-8 desktop-sm:inset-x-16 z-50">
            <Logo id="main-logo" class="h-6 desktop-sm:h-10" />
        </div>
        <div id="smooth-content">
            <slot />
        </div>
    </div>
</template>