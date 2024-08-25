export async function load({ params }) {
  let products = [];

  const products_modules = import.meta.glob('$lib/content/products/*.json');

  for (const path in products_modules) {
    /** @ts-ignore */
    products.push(products_modules[path]().then((mod) => mod.default));
  }

  return {
    products: await Promise.all(products)
  };
}
