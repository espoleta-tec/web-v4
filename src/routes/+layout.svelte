<script>
  import '../app.css';

  export let data;

  const locale = data.locale;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header
  class="flex flex-row py-8 px-16 bg-gray-50 shadow-sm w-full sticky top-0 left-0 z-50"
>
  <a
    href="/{locale}"
    class="flex flex-row items-center gap-2 hover:cursor-pointer"
  >
    <img src="/logo.svg" class="h-10 w-20 object-contain" alt="ESPOLETA" />
    <div class="text-green-800">
      <div><span class="font-bold">ESPOLETA</span> Tecnologías</div>
      <div class="text-xs">You need it. We make it true.</div>
    </div>
  </a>
  <div class="flex-grow"></div>
  <div
    class="uppercase hidden lg:flex lg:flex-row flex-col gap-4 items-center text-green-800 font-medium text-center"
  >
    {#each data.nav_links as nav_link}
      <a
        href="/{locale}{nav_link.en.url}"
        class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer"
      >
        {nav_link[locale].title}
      </a>
    {/each}
  </div>
  <div class="flex flex-row items-center pl-16">
    <a
      data-sveltekit-reload
      class="mx-2 px-2 {locale === 'es' ? 'bg-green-800 text-white' : ''}"
      href="/es">ES</a
    >
    /
    <a
      data-sveltekit-reload
      class="mx-2 px-2 {locale === 'en' ? 'bg-green-800 text-white' : ''}"
      href="/en">EN</a
    >
  </div>
</header>

<slot />

<section class="p-16 mt-16 bg-gray-100">The footer</section>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.50);
  }
</style>
