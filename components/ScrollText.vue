<template>
    <div class="w-full overflow-hidden">
        <div class="text-scroll">
            <h3 class="text-body-gray-dark" v-for="i in 28">
                <slot />
            </h3>
        </div>
    </div>
</template>