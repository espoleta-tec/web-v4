<script>
	const team = new Array(5).fill(0);
	import { LandingPage } from '$lib';
</script>

<section class="px-16">
	<div class="font-display text-5xl text-green-800 font-medium mb-8">ESPOLETA Tecnologías</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4" style="align-items: start">
		<div>
			<div class="text-green-700 font-medium">Razon de ser</div>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates architecto voluptatem
				eligendi inventore repellendus voluptas mollitia ipsa, veniam doloremque, deleniti libero et
				magnam id, itaque vel. Alias quo odit molestias?
			</div>
		</div>

		<div class="lg:row-span-2">
			<div class="text-green-700 font-medium">Experiencia</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident itaque fugit, error
				repellendus illo quae, adipisci nam officia molestias dignissimos, quasi necessitatibus
				voluptate id repudiandae minima tempore obcaecati? Praesentium, laudantium. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Debitis iste accusamus soluta voluptate ducimus
				quos rerum magnam saepe dignissimos qui! Natus facilis laudantium aliquam consequuntur enim
				deleniti asperiores, distinctio laboriosam.
			</div>
		</div>

		<div>
			<div class="text-green-700 font-medium">Trayectoria</div>
			<div>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus blanditiis facilis,
				omnis delectus consectetur velit perferendis aliquam, impedit earum vero, totam nesciunt
				necessitatibus! Repudiandae velit reiciendis fugiat, ipsa excepturi totam! <br />
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ratione voluptatum consequatur
				debitis quibusdam quam nemo voluptate! Saepe vero dicta a laborum hic at error placeat reprehenderit
				aspernatur? Natus, quod?<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, magnam eius ducimus
				reiciendis dicta! Tenetur quo deserunt reiciendis facere. Vitae, dolorem nisi nostrum culpa sint
				deleniti officiis rerum. Similique?
			</div>
		</div>
	</div>
</section>

<section class="mt-16 flex flex-col items-center gap-8 px-16">
	<div class="font-display text-5xl text-green-800 font-medium">The team</div>
	<div class="lg:w-1/2">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem deleniti ducimus porro,
		possimus nulla voluptates sequi dolores quo, maxime nobis praesentium sapiente ullam atque
		recusandae blanditiis voluptatem amet?
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
		{#each team as member, i}
			<div class="flex flex-col items-center">
				<img
					src={LandingPage.header_image}
					alt="placeholder"
					class="w-[195px] h-[280px] object-contain bg-black"
				/>
				<div class="text-green-600 text-xl">El increible hombre arana</div>
				<div class="text-sm text-gray-600 self-start">Se pega a todo.</div>
			</div>
		{/each}
	</div>
</section>
