import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, private http: HttpClient) { }

  data: Employee[];
  ngOnInit() {
    this.get();

  }
  get() {
    this.service.get().subscribe(x => this.data = x);
  }

  delete(employee: Employee): void {
    this.data = this.data.filter(h => h !== employee);
    this.service.delete(employee).subscribe();
  }
  onSubmit(employee: Employee) {
    this.service.post(employee).subscribe();
  }

  edit(employee: Employee): void {
    this.service.put(employee)
    .subscribe();
  }
}



