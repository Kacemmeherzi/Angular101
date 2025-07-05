import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  handleUpdate(event: Product, id: number) {
    this.producService.updateProduct(id, event).subscribe((success) => {
      console.log(success);
      this.getProducts();
    });
  }
  categories: string[] = [];
  selectedCategory!: string;
  filterProducts(event: string) {
    this.getProducts();
    this.searchTeam = event;
    this.findProduct();
  }
  searchTeam: string = '';
  sortDirection: string = 'asc';
  sortColumn!: string;
  getProducts() {
    this.producService.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data.map((product) => {
        return product.category;
      });
      console.log(this.categories);
    });
  }
  sortbyfield(field: string) {
    if (field === this.sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'dsc' : 'asc';
      this.sort();
    } else {
      this.sortColumn = field;
      this.sortDirection === 'asc';
      console.log(this.sortColumn);
      console.log(this.sortDirection);

      this.sort();
    }
  }
  products: Product[] = [];
  constructor(private producService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  findProduct() {
    const value = this.searchTeam.toLowerCase();
    this.products = this.products.filter(
      (product) =>
        product.id.toString().includes(value) ||
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value) ||
        product.price.toString().includes(value)
    );
  }
  detelteProduct(id: number) {
    const confirmattion = window.confirm('erara');
    console.log(confirmattion);

    if (!confirmattion) {
      return;
    }

    this.products = this.products.filter((product) => {
      return product.id != id;
    });
  }
  sort() {
    if (!this.sortColumn) return;

    this.products = this.products.sort((a, b) => {
      let valA = a[this.sortColumn as keyof Product] ?? '';
      let valB = b[this.sortColumn as keyof Product] ?? '';

      if (typeof valA === 'string' || typeof valB === 'string') {
        return this.sortDirection === 'asc'
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      } else if (typeof valA === 'number' && typeof valB === 'number') {
        return this.sortDirection === 'asc' ? valA - valB : valB - valA;
      } else {
        console.warn('Unsupported data type for sorting');
        return 0;
      }
    });
  }
}
