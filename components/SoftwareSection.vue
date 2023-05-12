<template>
    <div class="border-y border-border relative">
        <div class="flex items-stretch mx-auto border-x max-w-max border-border relative z-10 divide-x divide-border -translate-x-10" v-parallax:x="{percentMax: 30, percentMin: 0, direction: 'right'}">
            <div>
                <img class="dark-overlay h-[516px]" src="/images/software.jpg" />
            </div>
            <div class="bg-button-background p-12 px-10 max-w-[548px]">
                <strong class="uppercase">We build stuff that matter</strong>
                <p>Id proident veniam commodo duis aliqua aliquip sit officia in sint duis voluptate labore cupidatat.</p>
                <h2 class="text-primary no-grow">software</h2>
            </div>
        </div>
        <div class="w-1/2 absolute top-0 right-0 z-0 border-b border-border">
            <ScrollText>software</ScrollText>
        </div>
    </div>
</template>