<!-- <template>
    <section class="border-y border-border flex items-stretch bg-section-background">
        <div class="flex-1 flex items-stretch" v-if="selectedCompany == 'M2Call'">
            <div class="flex-1">
                <img class="object-cover w-full h-full" src="~/assets/images/m2call.jpeg" alt="">
            </div>
            <div class="flex-1 bg-background text-body-light">
                <div class="p-8">
                    Eiusmod ullamco velit sint qui sunt exercitation adipisicing sit aute Lorem. Id qui cillum irure pariatur ad sit laboris excepteur reprehenderit commodo velit incididunt sunt reprehenderit esse. Veniam sunt fugiat Lorem ea ipsum est magna non ea id duis nulla. Esse nulla excepteur officia ipsum minim officia cupidatat Lorem id consectetur pariatur et aliqua occaecat. Velit aute excepteur culpa adipisicing mollit. Ipsum ullamco reprehenderit deserunt veniam nisi ut nisi magna irure exercitation. Voluptate sint officia tempor et consequat exercitation nisi eiusmod proident ipsum ut proident.
                </div>
            </div>
        </div>
        <div class="flex-1 flex items-stretch" v-if="selectedCompany == 'Nivo'">
            <div class="flex-1">
                <img class="object-cover w-full h-full" src="~/assets/images/nivo.jpeg" alt="">
            </div>
            <div class="flex-1 bg-background text-body-light">
                <div class="p-8">
                    Eiusmod ullamco velit sint qui sunt exercitation adipisicing sit aute Lorem. Id qui cillum irure pariatur ad sit laboris excepteur reprehenderit commodo velit incididunt sunt reprehenderit esse. Veniam sunt fugiat Lorem ea ipsum est magna non ea id duis nulla. Esse nulla excepteur officia ipsum minim officia cupidatat Lorem id consectetur pariatur et aliqua occaecat. Velit aute excepteur culpa adipisicing mollit. Ipsum ullamco reprehenderit deserunt veniam nisi ut nisi magna irure exercitation. Voluptate sint officia tempor et consequat exercitation nisi eiusmod proident ipsum ut proident.
                </div>
            </div>
        </div>
        <div class="flex-1 flex items-stretch" v-if="selectedCompany == 'Mindvision'">
            <div class="flex-1">
                <img class="object-cover w-full h-full" src="~/assets/images/mindvision.jpeg" alt="">
            </div>
            <div class="flex-1 bg-background text-body-light">
                <div class="p-8">
                    Eiusmod ullamco velit sint qui sunt exercitation adipisicing sit aute Lorem. Id qui cillum irure pariatur ad sit laboris excepteur reprehenderit commodo velit incididunt sunt reprehenderit esse. Veniam sunt fugiat Lorem ea ipsum est magna non ea id duis nulla. Esse nulla excepteur officia ipsum minim officia cupidatat Lorem id consectetur pariatur et aliqua occaecat. Velit aute excepteur culpa adipisicing mollit. Ipsum ullamco reprehenderit deserunt veniam nisi ut nisi magna irure exercitation. Voluptate sint officia tempor et consequat exercitation nisi eiusmod proident ipsum ut proident.
                </div>
            </div>
        </div>
        <div class="flex-1 flex items-stretch" v-if="selectedCompany == 'Easy ID'">
            <div class="flex-1">
                <img class="object-cover w-full h-full" src="~/assets/images/easyid.jpeg" alt="">
            </div>
            <div class="flex-1 bg-background text-body-light">
                <div class="p-8">
                    Eiusmod ullamco velit sint qui sunt exercitation adipisicing sit aute Lorem. Id qui cillum irure pariatur ad sit laboris excepteur reprehenderit commodo velit incididunt sunt reprehenderit esse. Veniam sunt fugiat Lorem ea ipsum est magna non ea id duis nulla. Esse nulla excepteur officia ipsum minim officia cupidatat Lorem id consectetur pariatur et aliqua occaecat. Velit aute excepteur culpa adipisicing mollit. Ipsum ullamco reprehenderit deserunt veniam nisi ut nisi magna irure exercitation. Voluptate sint officia tempor et consequat exercitation nisi eiusmod proident ipsum ut proident.
                </div>
            </div>
        </div>
        <div class="flex-1">
            <ul class="divide-y divide-border"> 
                <li v-for="company in companies" :key="company.name">
                    <a @mouseover="selectedCompany = company.name" class="bar-link" :href="company.link">{{ company.name }}<span>&gt;</span></a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                selectedCompany: 'M2Call',
                companies: [
                    {
                        name: 'M2Call',
                        link: 'http://m2call.com/',
                    },
                    {
                        name: 'Nivo',
                        link: 'https://www.nivo.nu/',
                    },
                    {
                        name: 'Mindvision',
                        link: 'https://mindvision.dk/',
                    },
                    {
                        name: 'Easy ID',
                        link: '#',
                    },
                ]
            }
        },
        mounted () {
            this.selectedCompany = this.companies[0].name;
        }
    }
</script> -->
<template>
    <section class="bg-section-background glitches">
        <div class="grid gap-8 grid-cols-2">
            <div class="m2call-parallax relative w-[50vw] h-[40vh] ml-12">
                <div class="content glitch__delay__8">
                    <div class="glitch">
                        <div class="glitch__img m2call-image"></div>
                        <div class="glitch__img m2call-image"></div>
                        <div class="glitch__img m2call-image"></div>
                        <div class="glitch__img m2call-image"></div>
                        <div class="glitch__img m2call-image"></div>
                    </div>
                    <h2 class="content__title text-primary">M2Call</h2>
                    <p class="content__text">Consectetur irure et aute elit eu consequat voluptate exercitation proident Lorem magna fugiat proident consequat.</p>
                    <a class="content__link border border-border rounded-full bg-background p-4 px-8" href="#">Learn more</a>
                </div>
            </div>
            <div></div>
            <div></div>
            <div class="col-span-2 flex items-center justify-end">
                <div class="easyid-nivo-parallax">
                    <div class="w-[80vw] h-[55vh] mr-12 flex items-center space-x-12">
                        <div class="flex-1 relative">
                            <div class="content glitch__delay__12">
                                <div class="glitch">
                                    <div class="glitch__img easyid-image"></div>
                                    <div class="glitch__img easyid-image"></div>
                                    <div class="glitch__img easyid-image"></div>
                                    <div class="glitch__img easyid-image"></div>
                                    <div class="glitch__img easyid-image"></div>
                                </div>
                                <h2 class="content__title text-primary">Easy ID</h2>
                                <p class="content__text">Consectetur irure et aute elit eu consequat voluptate exercitation proident Lorem magna fugiat proident consequat.</p>
                                <a class="content__link border border-border rounded-full bg-background p-4 px-8" href="#">Learn more</a>
                            </div>
                        </div>
                        <div class="flex-1 relative">
                            <div class="content glitch__delay__4">
                                <div class="glitch">
                                    <div class="glitch__img nivo-image"></div>
                                    <div class="glitch__img nivo-image"></div>
                                    <div class="glitch__img nivo-image"></div>
                                    <div class="glitch__img nivo-image"></div>
                                    <div class="glitch__img nivo-image"></div>
                                </div>
                                <h2 class="content__title text-primary">Nivo</h2>
                                <p class="content__text">Consectetur irure et aute elit eu consequat voluptate exercitation proident Lorem magna fugiat proident consequat.</p>
                                <a class="content__link border border-border rounded-full bg-background p-4 px-8" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2 flex justify-center mt-[10vh]">
                <div class="mindvision-parallax relative w-[50vw] h-[40vh]">
                    <div class="content glitch__delay__2">
                        <div class="glitch">
                            <div class="glitch__img mindvision-image"></div>
                            <div class="glitch__img mindvision-image"></div>
                            <div class="glitch__img mindvision-image"></div>
                            <div class="glitch__img mindvision-image"></div>
                            <div class="glitch__img mindvision-image"></div>
                        </div>
                        <h2 class="content__title text-primary">Mindvision</h2>
                        <p class="content__text">Consectetur irure et aute elit eu consequat voluptate exercitation proident Lorem magna fugiat proident consequat.</p>
                        <a class="content__link border border-border rounded-full bg-background p-4 px-8" href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .m2call-image {
        background-image: url(~/assets/images/m2call.png);
    }
    .nivo-image {
        background-image: url(~/assets/images/nivo.png);
    }
    .easyid-image {
        background-image: url(~/assets/images/easyid.png);
    }
    .mindvision-image {
        background-image: url(~/assets/images/mindvision.png);
    }
</style>