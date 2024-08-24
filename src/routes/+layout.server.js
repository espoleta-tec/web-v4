export function load({ params }) {
  /** @type{('en' | 'es')} */
  const locale = /** @type{any} */ (params.locale ?? 'en'); // prettier-ignore

  return {
    locale
  };
}
