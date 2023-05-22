<template>
    <section class="w-full bg-section-background h-[50vw] flex items-center justify-center relative border-t-[0.6vw] border-button-background border-dashed">
        <div v-slideIn>
            <h3 class="slideInLeft text-body-gray-dark">check out</h3>
            <h2 class="slideInRight"><span class="text-body-gray-dark">our</span> <span class="text-primary">portfolio</span></h2>
        </div>
    </section>
    <SectionPortfolioCompanies />
    <div class="bg-section-background pt-48">
        <div class="border-y border-border">
            <ScrollText>portfolio</ScrollText>
        </div>
    </div>
</template>