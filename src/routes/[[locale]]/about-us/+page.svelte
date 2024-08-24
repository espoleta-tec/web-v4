<script>
  export let data;

  /** @type{any} */
  const { about_us_page, locale } = data;

  const { company_points } = about_us_page.about_the_company;
</script>

<section class="px-16">
  <div class="font-display text-5xl text-green-800 font-medium mb-8 py-8">
    {about_us_page.about_the_company.title}
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4" style="align-items: start">
    {#each company_points as point, i}
      <div>
        <div class="text-green-700 font-medium">{point.point_title}</div>
        <div>{point.point_body}</div>
      </div>
    {/each}
  </div>
</section>

<section class="mt-8 flex flex-col items-center gap-8 px-16">
  <div class="font-display text-5xl text-green-800 font-medium">
    {about_us_page.about_the_company.the_team_title}
  </div>
  <div class="lg:w-3/4">
    {about_us_page.about_the_company.the_team_body}
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
    {#each data.team_members as member, i}
      <div class="flex flex-col items-center">
        <img
          src={member.en.photo}
          alt="placeholder"
          class="aspect-square h-[280px] object-contain"
        />
        <div class="text-green-600 text-xl">{member.en.name}</div>
        <div class="text-sm text-gray-600 self-start">
          {member[locale].description}
        </div>
      </div>
    {/each}
  </div>
</section>
