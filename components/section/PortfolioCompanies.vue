<template>
    <section class="border-y border-border flex items-stretch bg-section-background">
        <div class="flex-1 flex items-stretch" v-if="selectedCompany">
            <div class="flex-1 object-cover bg-cover bg-center" :style="['background-image: url(' + selectedCompany.image + ');']"></div>
            <div class="flex-1 bg-body-gray-light text-body-dark">
                <div class="p-8">
                    {{ selectedCompany?.content }}
                </div>
            </div>
        </div>
        <div class="flex-1">
            <ul class="divide-y divide-border"> 
                <li v-for="company in companies" :key="company.name">
                    <a @mouseover="selectedCompany = company" class="bar-link" :href="company.link">{{ company.name }}<span>&gt;</span></a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                selectedCompany: {},
                companies: [
                    {
                        name: 'M2Call',
                        content: 'M2Call bla bla bla',
                        link: 'http://m2call.com/',
                        image: '@/assets/images/m2call.jpeg'
                    },
                    {
                        name: 'Nivo',
                        content: 'Nivo bla bla bla',
                        link: 'https://www.nivo.nu/',
                        image: '@/assets/images/nivo.jpeg'
                    },
                    {
                        name: 'Mindvision',
                        content: 'Mindvision bla bla bla',
                        link: 'https://mindvision.dk/',
                        image: '@/assets/images/mindvision.jpeg'
                    },
                    {
                        name: 'Easy ID',
                        content: 'Easy ID bla bla bla',
                        link: '#',
                        image: '@/assets/images/easyid.jpeg'
                    },
                ]
            }
        },
        mounted () {
            this.selectedCompany = this.companies[0];
        }
    }
</script>