<template>
    <section class="glitches hidden desktop-sm:block">
        <div class="grid gap-8 desktop-sm:grid-cols-2">
            <div class="m2call-parallax relative w-full desktop-sm:w-[50vw] desktop-sm:h-[40vh] ml-[6vw]">
                <div class="content glitch__delay__8">
                    <div class="glitch">
                        <div class="glitch__img m2call-image"></div>
                        <div class="glitch__img m2call-image"></div>
                        <div class="glitch__img m2call-image"></div>
                        <div class="glitch__img m2call-image"></div>
                        <div class="glitch__img m2call-image"></div>
                    </div>
                    <h2 class="content__title text-primary">M2Call</h2>
                    <p class="content__text">Surveillance system, which alerts about potential risks in patient movements, for proactive care and risk prevention.</p>
                    <!-- <FormButton class="content__link">Learn more</FormButton> -->
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="desktop-sm:col-span-2 flex items-center justify-end">
                <div class="easyid-nivo-parallax">
                    <div class="w-[80vw] h-[55vh] mr-[6vw] flex items-center space-x-12">
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
                                <p class="content__text">App for GDPR-compliant identity verification. Safely data sharing while maintaining access control, privacy and security.</p>
                                <!-- <FormButton class="content__link">Learn more</FormButton> -->
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
                                <p class="content__text">Bluetooth-connected sensors that gather real-time training data to optimize training, performance, and horse welfare.</p>
                                <!-- <FormButton class="content__link">Learn more</FormButton> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="desktop-sm:col-span-2 flex justify-center mt-[10vh]">
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
                        <p class="content__text">Healthcare training with a VR environment that replicates real settings, transforming learning in medical scenarios.</p>
                        <!-- <FormButton class="content__link">Learn more</FormButton> -->
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="desktop-sm:col-span-2 flex items-center justify-end">
                <div class="easyid-nivo-parallax">
                    <div class="w-[80vw] h-[55vh] mr-[6vw] flex items-center space-x-12">
                        <div class="flex-1 relative">
                            <div class="content glitch__delay__12">
                                <div class="glitch">
                                    <div class="glitch__img easyid-image"></div>
                                    <div class="glitch__img easyid-image"></div>
                                    <div class="glitch__img easyid-image"></div>
                                    <div class="glitch__img easyid-image"></div>
                                    <div class="glitch__img easyid-image"></div>
                                </div>
                                <h2 class="content__title text-primary">Life with aritificials</h2>
                                <p class="content__text">Through debate, art, and provoking perspectives we shape the dialogue on integrating virtual and physical artificials.</p>
                                <!-- <FormButton class="content__link">Learn more</FormButton> -->
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
                                <h2 class="content__title text-primary">Taastrup kommune</h2>
                                <p class="content__text">With municipalities, we integrate IoT solutions in society, with expertise in selection, development, and installation.</p>
                                <!-- <FormButton class="content__link">Learn more</FormButton> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="glitches block desktop-sm:hidden">
        <flicking
            :options="{ circular: false }"
            :viewportTag="'div'"
            :cameraTag="'div'"
            :cameraClass="'space-x-8'"
            :plugins="plugins"
        >
            <div class="relative w-[80vw] h-[50vh] space-y-8">
                <div class="space-y-8 glitch__delay__8">
                    <h3 class="text-primary">M2Call</h3>
                    <div class="relative h-[30vh]">
                        <div class="glitch">
                            <div class="glitch__img m2call-image"></div>
                            <div class="glitch__img m2call-image"></div>
                            <div class="glitch__img m2call-image"></div>
                            <div class="glitch__img m2call-image"></div>
                            <div class="glitch__img m2call-image"></div>
                        </div>
                    </div>
                </div>
                <p>Id nostrud commodo ad eu commodo voluptate ex qui anim sunt Lorem sunt consequat.</p>
            </div>
            <div class="relative w-[80vw] h-[50vh] space-y-8">
                <div class="space-y-8 glitch__delay__2">
                    <h3 class="text-primary">EasyID</h3>
                    <div class="relative h-[30vh]">
                        <div class="glitch">
                            <div class="glitch__img easyid-image"></div>
                            <div class="glitch__img easyid-image"></div>
                            <div class="glitch__img easyid-image"></div>
                            <div class="glitch__img easyid-image"></div>
                            <div class="glitch__img easyid-image"></div>
                        </div>
                    </div>
                </div>
                <p>Id nostrud commodo ad eu commodo voluptate ex qui anim sunt Lorem sunt consequat.</p>
            </div>
            
            <template #viewport>
                <div class="flicking-pagination"></div>
            </template>
        </flicking>
    </section>
</template>

<script lang="ts">
    import Flicking from "@egjs/vue3-flicking";
    import "@egjs/vue3-flicking/dist/flicking.css";
    import { Pagination } from "@egjs/flicking-plugins";
    import "@egjs/flicking-plugins/dist/pagination.css";

    export default {
        components: {
            Flicking: Flicking,
        },
        data () {
            return {
                plugins: [new Pagination({ type: 'bullet' })],
            }
        }
    }
</script>

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