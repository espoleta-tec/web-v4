<script>
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header class="flex flex-row py-8 px-16 bg-gray-50 shadow-sm w-full sticky top-0 left-0 z-50">
	<a href="/" class="flex flex-row items-center gap-2 hover:cursor-pointer">
		<img src="/logo.svg" class="h-10" alt="ESPOLETA" />
		<div class="text-green-800">
			<div><span class="font-bold">ESPOLETA</span> Tecnologías</div>
			<div class="text-xs">You need it. We make it true.</div>
		</div>
	</a>
	<div class="flex-grow"></div>
	<div
		class="uppercase flex lg:flex-row flex-col gap-4 items-center text-green-800 font-medium text-center"
	>
		<a href="/about-us" class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer">
			quienes somos
		</a>
		<a href="/contact" class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer"
			>contactenos</a
		>
		<a href="/blog" class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer">blog</a>
		<a
			href="https://store.espoletatecnologias.com"
			class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer">tienda</a
		>
	</div>
</header>

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.50);
	}
</style>
