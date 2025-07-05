import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

@NgModule({
  declarations: [
    ProductListComponent,
    EditProductComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductModuleModule {}
