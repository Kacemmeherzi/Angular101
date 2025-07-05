import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../products/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Apple iPhone 14', price: 999, category: 'Electronics' },
    { id: 2, name: 'Nike Running Shoes', price: 120, category: 'Footwear' },
    { id: 3, name: 'Samsung TV', price: 799, category: 'Electronics' },
    { id: 4, name: "Levi's Jeans", price: 60, category: 'Clothing' },
    {
      id: 5,
      name: 'KitchenAid Mixer',
      price: 450,
      category: 'Home Appliances',
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }
  updateProduct(id: number, updatedProduct: Product): Observable<boolean> {
    this.products
      .filter((product) => product.id === id)
      .map((product) => {
        (product.id = updatedProduct.id),
          (product.name = updatedProduct.name),
          (product.price = updatedProduct.price),
          (product.category = updatedProduct.category);
      });
    return of(true);
  }
}
