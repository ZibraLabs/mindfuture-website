<template>
    <a 
        v-bind="$attrs" 
        class="inline-block border border-border rounded-full p-1 px-3 text-xs font-thin desktop-sm:text-[1.3vh] desktop-sm:leading-[130%] desktop-sm:p-3 desktop-sm:px-8" 
        :class="[buttonType == 'dark' ? 'bg-section-background' : 'bg-button-background']"
        href="#"
    >
        <slot />
    </a>
</template>

<script>
    export default {
        props: ['buttonType']
    }
</script>