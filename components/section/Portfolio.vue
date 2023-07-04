<template>
    <div class="bg-section-background">
        <section class="w-full lg:h-[50vw] flex items-center justify-center relative border-t-[2vw] lg:border-t-[0.6vw] border-button-background border-dashed p-4 py-12">
            <div v-slideIn>
                <h3 class="slideInLeft text-body-gray-dark">check out</h3>
                <h2 class="slideInRight"><span class="text-white">our</span> <span class="text-primary">portfolio</span></h2>
            </div>
        </section>
        <SectionPortfolioCompanies />
        <div class="pt-48">
            <div class="border-y border-border">
                <ScrollText>portfolio</ScrollText>
            </div>
        </div>
    </div>
</template>