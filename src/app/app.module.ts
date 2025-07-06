import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductModuleModule } from './products/product-module.module';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { HandlePresenceComponent } from './handle-presence/handle-presence.component';
import { EmployeesModule } from './employees/employees.module';
import { UppercasePipe } from './uppercase.pipe';
import { HighlightDirective } from './highlight.directive';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HighlightDirective, FormsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModuleModule,
    EmployeesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
