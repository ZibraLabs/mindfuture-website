<template>
    <div class="bg-section-background">
        <section class="w-full lg:h-[50vw] flex items-center justify-center relative border-t-[2vw] lg:border-t-[0.6vw] border-button-background border-dashed p-4 py-12 text-appear-container">
            <div>
                <div class="overflow-hidden"><h3 class="text-appear text-body-gray-dark">check out</h3></div>
                <div class="overflow-hidden"><h2 class="text-appear"><span class="text-white">our</span> <span class="text-primary">portfolio</span></h2></div>
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