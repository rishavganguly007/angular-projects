import { Component, Inject, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template:`
  <ul>
  <li *ngFor="let emp of employees">
  <p>{{emp?.tid}}</p>
  <p>{{emp?.tname}}</p>
  <p>{{emp?.domain}}</p>
  <p>{{emp?.location}}</p>
  </li>
  </ul>

  `
})
export class AppComponent implements OnInit{
 // [x: string]: any;
  title = 'third-project';
  employees!: Employee[];
  //employeeService: any;
  constructor(private employeeService : EmployeeService){}

  ngOnInit(){
    this.getEmployees()
  }

  public getEmployees() : void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };
  

 
 

}
