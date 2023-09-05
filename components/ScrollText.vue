<template>
    <div class="w-full overflow-hidden">
        <div class="text-scroll">
            <h4 class="text-body-gray-dark" v-for="i in 28">
                <slot />
            </h4>
        </div>
    </div>
</template>