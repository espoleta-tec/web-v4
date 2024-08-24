export function load({ params }) {
	let locale = params.locale ?? 'en';

	return {
		locale
	};
}
