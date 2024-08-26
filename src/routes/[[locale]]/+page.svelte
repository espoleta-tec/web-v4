<script>
  export let data;

  /** @type{ 'en' | 'es' } */
  const locale = data.locale;

  const products = data.products;

  import { LandingPage } from '$lib';
</script>

<!-- Head section -->
<section class="relative py-8 overflow-hidden px-4 sm:px-16">
  <img
    src="/bg-pattern.svg"
    alt=""
    class="min-w-full min-h-full overflow-hidden absolute top-0 left-0 -z-10 opacity-40 object-cover"
  />

  <div class="flex flex-col lg:flex-row">
    <div
      class="text-6xl text-green-800 font-regular w-full lg:w-1/3 font-display flex flex-col justify-center py-8"
    >
      <div class="text-center lg:text-start">
        {LandingPage[locale].title}
      </div>
    </div>
    <div class="w-full lg:w-1/3 flex frow justify-center relative">
      <div
        class="h-5/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 aspect-square bg-gray-400 bg-opacity-10 backdrop-blur-[2px]"
        style="clip-path: url(#cp);"
      ></div>
      <img
        src={LandingPage.en.header_image}
        alt="vortice-station"
        class="w-full h-[50vh] object-contain"
      />
    </div>
  </div>

  <!-- Define our SVG clip path -->
  <svg width="0" height="0">
    <clipPath class="layer" id="cp" clipPathUnits="objectBoundingBox">
      <path
        d="
		M 1 0.5 
		c 0 0.25, -0.25 0.5, -0.5 0.5
		C 0 1, 0 0.5, 0 0.5
		C 0 0.5, 0 0, 0.5 0
		C 1 0, 1 0.5, 1 0.5
		l -0.2 0
		c 0 -0.4, -0.6 -0.4, -0.6 0
		c 0 0.4, 0.6 0.4, 0.6 0
					 "
      />

      <circle cx="0.5" cy="0.5" r="0.2" />
    </clipPath>
  </svg>
</section>

<!-- Our products -->
<section class="flex flex-col gap-8 px-4 sm:px-16 py-8">
  <div
    class="text-5xl text-green-800 font-regular font-display text-center flex flex-row justify-center"
  >
    <div class="w-full md:w-3/4 lg:w-1/2">
      {LandingPage[locale].our_products_title}
    </div>
  </div>

  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis
    molestiae labore eveniet maiores est soluta magni id, quis velit nisi
    laborum porro nihil necessitatibus magnam modi expedita aperiam natus!
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto gap-4">
    {#each products as prod, i}
      <div
        class="text-center flex flex-col items-center relative bg-gray-100 p-4"
      >
        <div
          class="absolute top-4 left-4 p-4 min-h-16 aspect-square bg-green-600 text-white flex flex-col justify-center items-center"
        >
          <div>{i + 1}</div>
        </div>
        <img
          src={prod.en.logo}
          class="object-contain h-60 aspect-square"
          alt={prod[locale].alt_text}
        />
        <div class="text-xl font-medium text-green-800">
          {prod[locale].name}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Our Clients -->
<section class="py-8 px-4 sm:px-16">
  <div
    class="text-5xl p-4 text-green-800 font-regular font-display flex flex-row uppercase text-center justify-center"
  >
    {LandingPage[locale].our_clients}
  </div>
  <div class="flex flex-row flex-wrap gap-4">
    {#each data.clients as client}
      <div
        class="flex flex-col items-center flex-grow w-full sm:w-1/2 md:w-1/4"
      >
        <div class="text-center text-xl text-green-800">{client.en.name}</div>
        <img
          src={client.en.logo}
          alt="client-logo"
          class="h-40 aspect-square object-cover"
        />
        <div></div>
      </div>
    {/each}
  </div>
</section>

<!-- Features -->
<section class="py-8 px-4 sm:px-16 gap-8 flex flex-row flex-wrap">
  <div class="flex flex-col gap-8 w-full lg:w-7/12">
    <div
      class="text-5xl text-green-800 font-regular font-display flex flex-row justify-center uppercase"
    >
      {LandingPage[locale].station_features}
    </div>
    <div>
      {LandingPage[locale].station_features_body}
    </div>
    <div>
      <span
        class="text-white bg-green-800 p-2 hover:text-green-800 hover:bg-transparent hover:cursor-pointer hover:border-2 hover:border-green-800 uppercase"
        >seleccione el producto para visualizar</span
      >
    </div>
  </div>
  <div class=" bg-green-800 flex-grow">lol</div>
</section>

<footer class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16">
  <div>a</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
</footer>
