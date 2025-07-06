import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { UppercasePipe } from '../uppercase.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    EditProductComponent,
    ProductsDetailsComponent,
    UppercasePipe,
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
