<template>
    <section class="w-screen overflow-auto scroll-smooth">
        <div class="flex items-stretch flex-col lg:flex-row w-full h-full bg-background border-t border-border">
            <div class="w-full lg:w-3/5 bg-body-dark divide-y divide-body-gray-dark border-r border-body-gray-dark">
                <ScrollText>pillars</ScrollText>
                <!-- <flicking
                    :options="{ circular: false }"
                    :viewportTag="'div'"
                    :cameraTag="'div'"
                    :cameraClass="''"
                    :plugins="plugins"
                > -->
                    <div class="w-full lg:h-[40vw] bg-body-dark text-3xl flex items-end px-[4vh] pb-[8vh]">
                        <div class="space-y-8 lg:max-w-[40vw]">
                            <h3>no. 1</h3>
                            <h2 class="text-primary">envision</h2>
                            <p>Id nostrud commodo ad eu commodo voluptate ex qui anim sunt Lorem sunt consequat. Reprehenderit nulla adipisicing sunt mollit nulla ipsum proident aliquip exercitation proident. Elit ea id anim est ea laborum quis amet velit consequat incididunt. Duis quis excepteur ut dolore nisi ipsum duis do officia. Qui cillum do culpa ex labore qui veniam fugiat veniam mollit nostrud. Ipsum ullamco eiusmod est nostrud aute commodo laborum. Consectetur culpa est non do labore Lorem ipsum elit dolor deserunt anim irure deserunt.</p>
                        </div>
                    </div>
                    <div class="w-full lg:h-[40vw] bg-body-dark text-3xl flex items-end px-[4vh] pb-[8vh]">
                        <div class="space-y-8 lg:max-w-[40vw]">
                            <h3>no. 2</h3>
                            <h2 class="text-primary">connect</h2>
                            <p>Id nostrud commodo ad eu commodo voluptate ex qui anim sunt Lorem sunt consequat. Reprehenderit nulla adipisicing sunt mollit nulla ipsum proident aliquip exercitation proident. Elit ea id anim est ea laborum quis amet velit consequat incididunt. Duis quis excepteur ut dolore nisi ipsum duis do officia. Qui cillum do culpa ex labore qui veniam fugiat veniam mollit nostrud. Ipsum ullamco eiusmod est nostrud aute commodo laborum. Consectetur culpa est non do labore Lorem ipsum elit dolor deserunt anim irure deserunt.</p>
                        </div>
                    </div>
                    <div class="w-full lg:h-[40vw] bg-body-dark text-3xl flex items-end px-[4vh] pb-[8vh]">
                        <div class="space-y-8 lg:max-w-[40vw]">
                            <h3>no. 3</h3>
                            <h2 class="text-primary">create</h2>
                            <p>Id nostrud commodo ad eu commodo voluptate ex qui anim sunt Lorem sunt consequat. Reprehenderit nulla adipisicing sunt mollit nulla ipsum proident aliquip exercitation proident. Elit ea id anim est ea laborum quis amet velit consequat incididunt. Duis quis excepteur ut dolore nisi ipsum duis do officia. Qui cillum do culpa ex labore qui veniam fugiat veniam mollit nostrud. Ipsum ullamco eiusmod est nostrud aute commodo laborum. Consectetur culpa est non do labore Lorem ipsum elit dolor deserunt anim irure deserunt.</p>
                        </div>
                    </div>
                    <!-- <template #viewport>
                        <div class="flicking-pagination"></div>
                    </template>
                </flicking> -->
            </div>
            <div class="w-1 bg-secondary max-h-full h-0 growing-line"></div>
            <div class="w-full lg:w-2/5 min-h-full animation-video-container">
                <div class="w-full animation-video relative">
                    <video class="we-envision w-full opacity-0 absolute inset-0 mx-auto" src="@/assets/video/we_envision.mov" autoplay loop muted></video>
                    <video class="we-connect w-full opacity-0 absolute inset-0 mx-auto" src="@/assets/video/we_connect_new.mov" autoplay loop muted></video>
                    <video class="we-create w-full opacity-0 absolute inset-0 mx-auto" src="@/assets/video/we_create.mov" autoplay loop muted></video>
                    <div class="h-px w-full bg-body-gray-dark absolute top-[24vw] inset-x-0"></div>
                </div>
            </div>
        </div>
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