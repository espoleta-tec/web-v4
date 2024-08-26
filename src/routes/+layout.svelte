<script>
  import '../app.css';

  export let data;

  const locale = data.locale;

  import { Icon } from 'svelte-icons-pack';
  import { FiMenu } from 'svelte-icons-pack/fi';
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
  class="flex flex-row py-8 px-4 md:px-16 bg-gray-50 shadow-sm w-full sticky top-0 left-0 z-50"
>
  <a
    href="/{locale}"
    class="flex flex-row items-center gap-2 hover:cursor-pointer"
  >
    <img src="/logo.svg" class="h-10 w-20 object-contain" alt="ESPOLETA" />
    <div class="text-green-800 hidden sm:inline-block">
      <div><span class="font-bold">ESPOLETA</span> Tecnologías</div>
      <div class="text-xs">You need it. We make it true.</div>
    </div>
  </a>
  <div class="flex-grow"></div>
  <div class="relative lg:hidden flex flex-row items-center">
    <input id="check01" type="checkbox" name="menu" />
    <label
      for="check01"
      class="border-2 border-transparent hover:border-green-800 p-1 text-2xl"
    >
      <div class="flex flex-row items-center gap-2 uppercase">
        <Icon src={FiMenu} />{data.menu_text}
      </div>
    </label>
    <ul
      class="submenu w-auto min-w-64 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full bg-gray-50 shadow-md p-4 text-center text-xl flex flex-col gap-4"
    >
      {#each data.nav_links as nav_link}
        <a
          data-sveltekit-reload
          href="/{locale}{nav_link.en.url}"
          class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer"
        >
          {nav_link[locale].title}
        </a>
      {/each}
    </ul>
  </div>
  <div class="flex-grow"></div>
  <div
    class="uppercase hidden lg:flex lg:flex-row flex-col gap-4 items-center text-green-800 font-medium text-center"
  >
    {#each data.nav_links as nav_link}
      <a
        data-sveltekit-reload
        href="/{locale}{nav_link.en.url}"
        class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer"
      >
        {nav_link[locale].title}
      </a>
    {/each}
  </div>
  <div class="flex flex-row items-center lg:pl-16">
    <a
      data-sveltekit-reload
      class="mx-2 px-2 {locale === 'es' ? 'bg-green-800 text-white' : ''}"
      href={data.pathname.replace(/es|en/, 'es')}>ES</a
    >
    /
    <a
      data-sveltekit-reload
      class="mx-2 px-2 {locale === 'en' ? 'bg-green-800 text-white' : ''}"
      href={data.pathname.replace(/es|en/, 'en')}>EN</a
    >
  </div>
</header>

<slot />

<section class="p-16 mt-16 bg-gray-100">The footer</section>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.50);
  }

  /*hide the inputs/checkmarks and submenu*/
  input,
  ul.submenu {
    display: none;
  }

  /*position the label*/
  label {
    position: relative;
    display: block;
    cursor: pointer;
  }

  /*show the submenu when input is checked*/
  input:checked ~ ul.submenu {
    display: flex;
  }

  input:checked ~ label {
    @apply border-green-800;
  }
</style>
