import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductModuleModule } from './products/product-module.module';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductModuleModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
