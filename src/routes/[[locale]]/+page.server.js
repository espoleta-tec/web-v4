export async function load({ params }) {
  let products = [];
  let clients = [];

  const products_modules = import.meta.glob('$lib/content/products/*.json');

  for (const path in products_modules) {
    /** @ts-ignore */
    products.push(products_modules[path]().then((mod) => mod.default));
  }

  const clients_modules = import.meta.glob('$lib/content/clients/*.json');

  for (const path in clients_modules) {
    /** @ts-ignore */
    clients.push(clients_modules[path]().then((mod) => mod.default));
  }

  return {
    products: await Promise.all(products),
    clients: await Promise.all(clients)
  };
}
