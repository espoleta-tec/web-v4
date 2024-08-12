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

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.50);

		@apply mx-16;
	}
</style>
