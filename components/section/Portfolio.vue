<template>
    <div class="border-y border-border bg-section-background">
        <ScrollText>portfolio</ScrollText>
    </div>
    <section class="w-full bg-section-background h-[1000px] flex items-center justify-center relative">
        <div v-slideIn>
            <h3 class="slideInLeft text-body-gray-dark">check out</h3>
            <h2 class="slideInRight"><span class="text-body-gray-dark">our</span> <span class="text-primary">portfolio</span></h2>
        </div>
    </section>
    <SectionPortfolioCompanies />
</template>