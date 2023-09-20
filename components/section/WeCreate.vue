<template>
    <section class="w-screen desktop-sm:overflow-auto desktop-sm:scroll-smooth">
        <div class="flex items-stretch flex-col desktop-sm:flex-row w-full h-full bg-background border-t border-border">
            <div class="w-full desktop-sm:w-3/5 bg-body-dark divide-y divide-body-gray-dark border-r border-body-gray-dark">
                <ScrollText>pillars</ScrollText>
                    <div class="w-full desktop-sm:h-[40vw] bg-body-dark text-3xl flex items-end desktop-sm:px-[4vh] pb-[8vh]">
                        <div class="space-y-8 desktop-sm:max-w-[40vw]">
                            <h4 class="hidden desktop-sm:block">no. 1</h4>
                            <h2 class="desktop-sm:text-primary capitalize desktop-sm:normal-case px-[6vw] desktop-sm:px-0"><span class="text-primary desktop-sm:hidden">1.</span> envision</h2>
                            <img class="w-full desktop-sm:hidden" src="@/assets/video/envision.gif" />
                            <div class="p-[6vw] desktop-sm:p-0 bg-button-background desktop-sm:bg-transparent space-y-[2vw] desktop-sm:w-4/5">
                                <p>
                                    Envisioning for us means seeing the world in a new way. It means to innovate, notice patterns & trends and set up clear directions for the future. We encourage experimentation, open discussion and the freedom to think outside the box. We want our team members to fearlessly explore new technologies and ideas.
                                </p>
                                <p>
                                    Understanding our customers and partners needs, problems and aspirations is big part of that. This customer-centric approach allow us to identify gaps in the market and design products and solutions that truly add value to our society.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full desktop-sm:h-[40vw] bg-body-dark text-3xl flex items-end desktop-sm:px-[4vh] pb-[8vh]">
                        <div class="space-y-8 desktop-sm:max-w-[40vw]">
                            <h4 class="hidden desktop-sm:block">no. 2</h4>
                            <h2 class="desktop-sm:text-primary capitalize desktop-sm:normal-case px-[6vw] desktop-sm:px-0"><span class="text-primary desktop-sm:hidden">2.</span> connect</h2>
                            <img class="w-full desktop-sm:hidden" src="@/assets/video/connect.gif" />
                            <div class="p-[6vw] desktop-sm:p-0 bg-button-background desktop-sm:bg-transparent space-y-[2vw] desktop-sm:w-4/5">
                                <p>
                                    We strive to achieve the ultimate synergies as we seamlessly connect diverse customer segments with cutting-edge technologies. Guided by our team of skilled experts driven by unwavering determination, we use the power of this fusion to propel our visions forward.
                                </p>
                                <p>
                                    To connect is to take advantage of all of our strengths, and to rely on one another. We expedite rapid progress by orchestrating dynamic teams comprising seasoned experts, visionary inventors, and strategic partners.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full desktop-sm:h-[40vw] bg-body-dark text-3xl flex items-end desktop-sm:px-[4vh] pb-[8vh]">
                        <div class="space-y-8 desktop-sm:max-w-[40vw]">
                            <h4 class="hidden desktop-sm:block">no. 3</h4>
                            <h2 class="desktop-sm:text-primary capitalize desktop-sm:normal-case px-[6vw] desktop-sm:px-0"><span class="text-primary desktop-sm:hidden">3.</span> create</h2>
                            <img class="w-full desktop-sm:hidden" src="@/assets/video/create.gif" />
                            <div class="p-[6vw] desktop-sm:p-0 bg-button-background desktop-sm:bg-transparent space-y-[2vw] desktop-sm:w-4/5">
                                <p>
                                    The final pillar is all about delivering a tangible solution that benefits people. We specialise in crafting groundbreaking technology products from start to finish, with our skillset spanning across both hardware and software.
                                </p>
                                <p>
                                    To create is also to forge robust collaborations for manufacturing, ensuring an elevated standard of quality and excellence. Our dedication perseveres until the final product gains substantial traction in the market. But more importantly, until it helps the user.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="w-1 bg-secondary max-h-full h-0 growing-line hidden desktop-sm:block"></div>
            <div class="w-full desktop-sm:w-2/5 min-h-full animation-video-container hidden desktop-sm:block">
                <div class="w-full animation-video relative">
                    <video class="we-envision w-full opacity-0 absolute inset-0 mx-auto" src="@/assets/video/envision.mp4" autoplay loop muted></video>
                    <video class="we-connect w-full opacity-0 absolute inset-0 mx-auto" src="@/assets/video/connect.mp4" autoplay loop muted></video>
                    <video class="we-create w-full opacity-0 absolute inset-0 mx-auto" src="@/assets/video/create.mp4" autoplay loop muted></video>
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