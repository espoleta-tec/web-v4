export async function load({ params }) {
	const team_member_modules = import.meta.glob('$lib/content/team_members/*.json');

	let team_members = [];

	for (const path in team_member_modules) {
		team_members.push(team_member_modules[path]().then((mod) => mod.default));
	}

	const about_us_page = await import('$lib/content/about_us.json').then(
		(mod) => mod[params.locale ?? 'en']
	);

	return {
		team_members: await Promise.all(team_members),
		about_us_page
	};
}
