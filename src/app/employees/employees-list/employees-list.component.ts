import { Component, OnInit } from '@angular/core';
import { EmployeesServiceService } from '../../services/employees-service.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent implements OnInit {
keydown(event: KeyboardEvent) {
console.log(event);

}
  navigateToDetails() {
    throw new Error('Method not implemented.');
  }
  selectEmp(emp: Employee) {
    this.selectedEmp = emp;
  }
  changeBackground(
    isPresent: boolean
  ):
    | string
    | string[]
    | Set<string>
    | { [klass: string]: any }
    | null
    | undefined {
    return isPresent ? { blue: isPresent } : { red: !isPresent };
  }
  selectedEmp!: Employee;
  constructor(private employeesService: EmployeesServiceService) {}
  employees$!: Observable<Employee[]>;
  ngOnInit(): void {
    this.employees$ = this.employeesService.employees$;
  }
  deleteEmployee(id: number) {
    this.employeesService.removeEmployee(id);
  }
}
