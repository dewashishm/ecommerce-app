const BASE_URL = "http://localhost:3000/api";

export async function getProducts() {
  const res = await fetch(
    `${BASE_URL}/products`
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductById(_id) {
  const res = await fetch(`${BASE_URL}/products/${_id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function searchProducts(query) {
  const res = await fetch(
    `${BASE_URL}/products/search?q=${query}`
  );
  if (!res.ok) throw new Error("Search failed");
  return res.json();
};

export async function getProductByCategory (category) {

  const res = await fetch(`${BASE_URL}/products/categories/${category}`

  );
  return res.json();
};



