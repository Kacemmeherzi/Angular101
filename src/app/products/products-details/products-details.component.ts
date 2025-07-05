import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  productId?: number;
  product?: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = Number(id);
      console.log(id);
      this.getProductById(this.productId);
    }
  }
  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      if (product) {
        this.product = product;
      }
    });
  }
}
