<script>
	import { Icon } from 'svelte-icons-pack';
	import { FaSolidMagnifyingGlass } from 'svelte-icons-pack/fa';
	import { LandingPage } from '$lib';
</script>

<!-- Head section -->
<img src="/bg-pattern.svg" alt="" class="min-w-full min-h-full absolute top-0 left-0 -z-10" />
<header class="flex flex-row py-8">
	<div class="flex flex-row items-center gap-2">
		<img src="/logo.svg" class="h-10" alt="ESPOLETA" />
		<div class="text-green-800">
			<div><span class="font-bold">ESPOLETA</span> Tecnologías</div>
			<div class="text-xs">You need it. We make it true.</div>
		</div>
	</div>
	<div class="flex-grow"></div>
	<div
		class="uppercase flex lg:flex-row flex-col gap-4 items-center text-green-800 font-medium text-center"
	>
		<div class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer">asistencia</div>
		<div class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer">quienes somos</div>
		<div class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer">contactenos</div>
		<div class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer">blog</div>
		<div class="hover:bg-green-800 hover:text-white p-2 hover:cursor-pointer">tienda</div>
		<Icon src={FaSolidMagnifyingGlass} />
	</div>
</header>

<div class="flex flex-col lg:flex-row my-8">
	<div
		class="text-6xl text-green-800 font-regular w-full lg:w-1/3 font-display flex flex-col justify-center"
	>
		<div class="text-center lg:text-start">
			{LandingPage.title}
		</div>
	</div>
	<div class="w-full lg:w-1/3 flex frow justify-center relative">
		<div
			class="h-5/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 aspect-square bg-gray-400 bg-opacity-10 backdrop-blur-[2px]"
			style="clip-path: url(#cp);"
		></div>
		<img src="/station.png" alt="vortice-station" />
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

<!-- Our products -->
<section class="flex flex-col gap-8">
	<div
		class="text-5xl text-green-800 font-regular font-display text-center flex flex-row justify-center"
	>
		<div class="w-1/2">
			{LandingPage.our_products_title}
		</div>
	</div>

	<div>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis molestiae labore eveniet
		maiores est soluta magni id, quis velit nisi laborum porro nihil necessitatibus magnam modi
		expedita aperiam natus!
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
		<div class="bg-green-600 text-white text-center">a</div>
		<div class="bg-green-600 text-white text-center">b</div>
		<div class="bg-green-600 text-white text-center">c</div>
		<div class="bg-green-600 text-white text-center">d</div>
	</div>
</section>

<!-- Our Clients -->
<section class="mt-16">
	<div
		class="text-5xl text-green-800 font-regular font-display flex flex-row justify-center uppercase"
	>
		Nuestros Clientes
	</div>
	<div class="grid grid-cols-4">
		<div>a</div>
		<div>a</div>
		<div>a</div>
		<div>a</div>
	</div>
</section>

<!-- Features -->
<section class="mt-16 gap-8 flex flex-row flex-wrap">
	<div class="flex flex-col gap-8 w-full lg:w-7/12">
		<div
			class="text-5xl text-green-800 font-regular font-display flex flex-row justify-center uppercase"
		>
			Vortice es una estaciones de altas prestaciones a un precio inigualable
		</div>
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque officiis maxime quo
			corrupti ipsa id molestias, impedit quam. Amet explicabo natus necessitatibus similique ullam
			enim consequatur doloribus, eum itaque!
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
