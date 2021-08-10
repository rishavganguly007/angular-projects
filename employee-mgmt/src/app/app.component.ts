import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employee-mgmt';
  public employees!: Employee[];
  public editEmployee!: Employee;
  public deleteEmployee!: Employee;

  constructor(private employeeService: EmployeeService){}
  ngOnInit(){
    this.getEmployees();
  }

  public searchEmployees(key: string): void{
    const results: Employee[] = [];
    for(const emp of this.employees){
      if(emp.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||emp.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||emp.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||emp.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(emp);
      }
    }

    this.employees = results;
    if(results.length === 0 || !key){
      this.getEmployees();
    }
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

  public onAddEmloyee(addForm : NgForm): void{
    document.getElementById('add-employee-form')?.click();
    this.employeeService.addEmployees(addForm.value).subscribe(
      (response: Employee) =>{
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    )
  }
  public onUpdateEmloyee(employee : Employee): void{
    this.employeeService.updateEmployees(employee).subscribe(
      (response: Employee) =>{
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public onDeleteEmloyee(employeeId : number): void{
    this.employeeService.deleteEmployees(employeeId).subscribe(
      (response: void) =>{
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        this.getEmployees();
      }
    )
  }
  public onOpenModal(employee: any, mode: string): void{
    const container = document.getElementById("main-container");
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add')
    {
      button.setAttribute('data-target', '#addEmployeeModal');
    }

    if(mode === 'edit')
    {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }

    if(mode === 'delete')
    {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();

  }

  

}
