import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HandlePresenceComponent } from '../handle-presence/handle-presence.component';

@NgModule({
  declarations: [EmployeesListComponent, HandlePresenceComponent],
  imports: [CommonModule],
})
export class EmployeesModule {}
