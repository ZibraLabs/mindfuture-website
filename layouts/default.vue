<template>
	<div id="loading-full" class="fixed inset-0 z-[99999999] bg-body-dark overflow-hidden">
		<div class="w-[20vw]">
			<Logo id="logo-load" class="w-[12vw] text-body-light translate-y-[45vh] translate-x-[45vw]" />
			<div class="flex items-center translate-y-[45vh] translate-x-[45vw] space-x-4 ml-4" id="loading-bar-content">
				<div class="text-body-gray-light w-12 mt-5" id="loading-amount">
					0%
				</div>
			</div>
		</div>
	</div>

	<Transition 
		enter-active-class="duration-300 ease-out"
    	enter-from-class="-translate-y-24 opacity-0"
		enter-to-class="translate-y-0 opacity-100"
		leave-active-class="duration-200 ease-in"
		leave-from-class="translate-y-0 opacity-100"
		leave-to-class="-translate-y-24 transform opacity-0">

		<div class="fixed inset-0 z-[99999999] bg-body-dark overflow-hidden flex items-center p-4 desktop-sm:p-12" v-if="showNav">
			<div class="absolute top-4 right-4 desktop-sm:top-10 desktop-sm:right-12">
				<IconClose class="w-12 cursor-pointer" @click="toggleNav" />
			</div>
			<nav class="w-full">
				<ul class="text-[7vh] leading-normal font-extrabold mindfuture grid grid-cols-1 grid-rows-auto gap-[1vh] w-full">
					<li>
						<NuxtLink class="border-b border-border w-full group flex items-baseline gap-16 text-button-background hover:cursor-not-allowed">
							<span>about</span>
							<!-- <IconNavArrow class="h-[3.5vh] hidden group-hover:block" /> -->
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/hub" class="border-b border-border w-full group flex items-baseline gap-16 hover:text-primary">
							<span>our hub</span>
							<IconNavArrow class="h-[3.5vh] hidden group-hover:block" />
						</NuxtLink>
					</li>
					<li>
						<NuxtLink class="border-b border-border w-full group flex items-baseline gap-16 text-button-background hover:cursor-not-allowed">
							<span>garages</span>
							<!-- <IconNavArrow class="h-[3.5vh] hidden group-hover:block" /> -->
						</NuxtLink>
					</li>
					<li>
						<NuxtLink class="border-b border-border w-full group flex items-baseline gap-16 text-button-background hover:cursor-not-allowed">
							<span>portfolio</span>
							<!-- <IconNavArrow class="h-[3.5vh] hidden group-hover:block" /> -->
						</NuxtLink>
					</li>
					<li>
						<NuxtLink class="border-b border-border w-full group flex items-baseline gap-16 text-button-background hover:cursor-not-allowed">
							<span>contact</span>
							<!-- <IconNavArrow class="h-[3.5vh] hidden group-hover:block" /> -->
						</NuxtLink>
					</li>
				</ul>
			</nav>
			<div class="absolute bottom-4 desktop-sm:bottom-12 inset-x-4 desktop-sm:inset-x-12 flex flex-col desktop-sm:flex-row items-start desktop-sm:items-end justify-between space-y-4 desktop-sm:space-y-0">
				<h4>
					+45 31 50 15 01<br />
					info@mindfuture.com
				</h4>
				<div class="flex items-center space-x-12">
					<a href="https://www.linkedin.com/company/17910778/admin/feed/posts/" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-[22px] desktop-sm:h-[2vh]" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
					</a>
					<a href="https://www.instagram.com/mindfuturedk/?hl=en" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-[22px] desktop-sm:h-[2vh]" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
					</a>
					<a href="mailto:info@mindfuture.com">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-[22px] desktop-sm:h-[2vh]" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/></svg>
					</a>
				</div>
			</div>
		</div>
	</Transition>
		
	<div id="smooth-wrapper">
		<div class="absolute z-[999] top-10 right-12">
			<IconBurgerNav class="w-12 cursor-pointer" @click="toggleNav" />
		</div>
		<div class="fixed top-[1.85rem] desktop-sm:top-12 inset-x-8 desktop-sm:inset-x-16 z-50 pointer-events-none">
			<Logo id="main-logo" class="h-6 desktop-sm:h-10" />
		</div>
		<div id="smooth-content">
			<slot />
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				showNav: false,
			}
		},
		methods: {
			toggleNav () {
				this.showNav = !this.showNav;
			}
		}
	}
</script>

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