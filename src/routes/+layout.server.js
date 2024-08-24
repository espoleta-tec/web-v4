export function load({ params }) {
	/** @type{'en' | 'es'} */
	let locale = params.locale ?? 'en';

	return {
		locale
	};
}
