export async function load({ params, url }) {
  /** @type{('en' | 'es')} */
  const locale = /** @type{any} */ (params.locale ?? 'en'); // prettier-ignore

  let nav_links = [];

  const nav_links_modules = import.meta.glob('$lib/content/nav_links/*.json');

  for (const path in nav_links_modules) {
    /** @ts-ignore */
    nav_links.push(nav_links_modules[path]().then((mod) => mod.default));
  }

  const layout_content = await import('$lib/content/layout.json');

  return {
    locale,
    nav_links: await Promise.all(nav_links),
    pathname: url.pathname,
    layout_data: layout_content[locale]
  };
}
