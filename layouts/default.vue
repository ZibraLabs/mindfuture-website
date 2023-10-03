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
						<NuxtLink to="#" class="border-b border-border w-full group flex items-baseline gap-16 text-button-background hover:cursor-not-allowed">
							<span>garages</span>
							<!-- <IconNavArrow class="h-[3.5vh] hidden group-hover:block" /> -->
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="#" class="border-b border-border w-full group flex items-baseline gap-16 text-button-background hover:cursor-not-allowed">
							<span>portfolio</span>
							<!-- <IconNavArrow class="h-[3.5vh] hidden group-hover:block" /> -->
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="#" class="border-b border-border w-full group flex items-baseline gap-16 text-button-background hover:cursor-not-allowed">
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
					<svg xmlns="http://www.w3.org/2000/svg" class="h-[22px] desktop-sm:h-[2vh]" viewBox="0 0 20 20"><path fill="currentColor" d="M17.316 6.246c.008.162.011.326.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562a3.779 3.779 0 0 1-3.526-2.621a3.858 3.858 0 0 0 1.705-.065a3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.716 10.716 0 0 0 7.781 3.945a3.813 3.813 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.602 7.602 0 0 0 2.397-.916a3.789 3.789 0 0 1-1.66 2.088a7.55 7.55 0 0 0 2.168-.594a7.623 7.623 0 0 1-1.884 1.953z"/></svg>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-[22px] desktop-sm:h-[2vh]" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-[22px] desktop-sm:h-[2vh]" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"/></svg>
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