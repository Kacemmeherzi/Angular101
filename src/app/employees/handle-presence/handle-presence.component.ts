import { Component, Input } from '@angular/core';
import { EmployeesServiceService } from '../../services/employees-service.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-handle-presence',
  templateUrl: './handle-presence.component.html',
  styleUrl: './handle-presence.component.css',
})
export class HandlePresenceComponent {
  constructor(private employeesService: EmployeesServiceService) {}
  @Input({ required: true }) employee!: Employee;

  editPresence() {
    this.employeesService.toggleAttendace(this.employee.id);
  }
}
