import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductsDetailsComponent,
  },
{
  path : 'employees' ,
  component : EmployeesListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
