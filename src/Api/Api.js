const API_URL = "https://fakestoreapi.com";
export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const products = await response.json();
  return products;
};
export const getProductDetails = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  const product = await response.json();
  console.log(product);
  return product;
};
export const getRecentProducts = async (id) => {
  const response = await fetch(`${API_URL}/products?limit=${id}`);
  const product = await response.json();
  return product;
};

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/products/categories`);
  const categories = await response.json();
  return categories;
};

export const getProductsInCategory = async (category) => {
  const response = await fetch(`${API_URL}/products/category/${category}`);
  const category_products = await response.json();
  return category_products;
};
