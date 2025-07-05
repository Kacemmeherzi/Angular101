import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee, Employees } from '../employees/models/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeesServiceService {
  constructor(private http: HttpClient) {}
  private employees = new BehaviorSubject<Employee[]>(Employees);
  employees$ = this.employees.asObservable();
  addEmployees(emp: Employee) {
    const current = this.employees.value;
    this.employees.next([...current, emp]);
  }
  toggleAttendace(id: number) {
    const updated = this.employees.value.map((emp) =>
      emp.id === id ? { ...emp, isPresent: !emp.isPresent } : emp
    );
    this.employees.next(updated);
  }
}
