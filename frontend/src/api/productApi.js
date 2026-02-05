const BASE_URL = "https://dummyjson.com";

export async function getProducts(limit = 10, skip = 0) {
  const res = await fetch(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function searchProducts(query) {
  const res = await fetch(
    `${BASE_URL}/products/search?q=${query}`
  );
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}
