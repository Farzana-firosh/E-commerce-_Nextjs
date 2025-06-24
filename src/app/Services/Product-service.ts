import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase {
  static getProducts = async () => {
    try {
      const response = await fetch(this.baseURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      if (!text) {
        throw new Error("Empty response from API");
      }
      return JSON.parse(text);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return []; 
    }
  };

  static getProductById = async (id: number | string) => {
    const response = await fetch(`${this.baseURL}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const product = await response.json();
    return product;
  };
}