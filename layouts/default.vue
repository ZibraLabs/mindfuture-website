<template>
    <div id="loading-full" class="fixed inset-0 z-[99999999] bg-body-dark overflow-hidden">
      <div class="w-[20vw]">
        <Logo id="logo-load" class="w-[20vw] text-body-light translate-y-[40vh] translate-x-[40vw]" />
        <div class="flex items-center translate-y-[40vh] translate-x-[40vw] space-x-4 ml-4" id="loading-bar-content">
          <div class="text-body-gray-light w-12" id="loading-amount">
            0%
          </div>
          <div class="w-full h-2 flex-1">
            <div class="bg-secondary h-full w-[0%]" id="loading-bar-fill"></div>
          </div>
        </div>
      </div>  
    </div>
    
    <div id="smooth-wrapper">
        <div class="fixed top-[1.85rem] desktop-sm:top-12 inset-x-8 desktop-sm:inset-x-16 z-50 pointer-events-none">
            <Logo id="main-logo" class="h-6 desktop-sm:h-10" />
        </div>
        <div id="smooth-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
}
</style>