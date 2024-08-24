<script>
	const contactSections = Array(5).fill();
</script>

<section class="flex flex-col gap-8 px-16">
	<div class="text-5xl text-green-800 font-display font-medium">Contactos</div>

	<div>Investigación y producción de aplicaciones tecnológicas bajo demanda.</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-1/2">
		{#each contactSections as session, i}
			<div>
				<div class="text-green-600">Telefonos</div>

				<div>+53 12341234</div>
				<div>+53 12341234</div>
			</div>
		{/each}
	</div>
</section>

<section class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 grid-flow-dense px-16">
	<div class="lg:col-start-2">
		<div class="text-4xl text-green-800 font-display font-medium mb-4">
			Necesita soporte tecnico
		</div>
		<div>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, voluptate! Sint sit
			quaerat voluptatum corrupti deleniti modi necessitatibus blanditiis a? Eligendi natus itaque
			illo ut culpa, reprehenderit harum libero enim?
		</div>
	</div>

	<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
		<div>
			<div class="text-4xl text-green-800 font-display font-medium">Enviar una solicitud</div>
			<div>Haga una pregunta al comercial</div>
		</div>

		<div>
			<div class="flex flex-col">
				<label for="name" class="text-sm text-gray-600">Nombre</label>
				<input name="name" type="text" class="border-2 border-solid border-green-800" />
			</div>
		</div>
	</div>
</section>
