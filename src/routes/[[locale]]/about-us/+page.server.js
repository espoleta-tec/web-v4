export async function load({ params }) {
	const team_member_modules = import.meta.glob('$lib/content/team_members/*.json');

	let team_members = [];

	for (const path in team_member_modules) {
		team_members.push(team_member_modules[path]().then((mod) => mod.default));
	}

	return {
		team_members: await Promise.all(team_members)
	};
}
