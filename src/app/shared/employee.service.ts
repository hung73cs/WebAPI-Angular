import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  rootURL = 'https://localhost:44304/api/employee';
  list: Employee[];

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.rootURL);
  }

  delete(employee: Employee): Observable<Employee[]> {
    const id = employee.employeeId;
    const url = `${this.rootURL}/delete/${id}`;
    return this.http.delete<Employee[]>(url);

  }

  post(employee: Employee): Observable<Employee[]> {
    const url = `${this.rootURL}/create/`;
    return this.http.post<Employee[]>(url,employee);
  }

  getOneEmployee(id: number): Observable<Employee[]> {
    const url = `${this.rootURL}/${id}`;
    return this.http.get<Employee[]>(url);
  }

  put(employee: Employee): Observable<any> {
    const url = `${this.rootURL}/update/`;

    return this.http.put(url, employee);
  }

}
