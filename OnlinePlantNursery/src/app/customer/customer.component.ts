import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customerUsername = '';
  public customerPassword = '';
  public customer!:Customer;
/////////////ADMIN////////////////////
  // public adminUsername = '';
  // public adminPassword = '';
  // public admin : Admin;
   
////////////////////////////////////////private _adminservice : AdminService, 
public isShown: boolean = false ;
  constructor(private _customerservice : CustomerService, 
    private _router : Router) { }   
  
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.customerUsername = this.loginForm.controls.username.value;
    this.customerPassword = this.loginForm.controls.password.value;
    
    /*     -- By Tarit                
    this._customerservice.validateCustomer(this.customerUsername, this.customerPassword).subscribe(
      data=>{       
      if(data == true) {
        this._router.navigate(['/home', this.customerUsername, this.customerPassword]);
      } else{
        this._router.navigate(['']);
      } }); */

      this._customerservice.validateCustomer(this.customerUsername, this.customerPassword).subscribe(
        data=>{this._router.navigate(['/home', this.customerUsername, this.customerPassword])}
        , error => this.isShown = true ); 
        
  }

  ///////////////////////ADMIN//////////////////////////////
  // onAdminSubmit(){
  //   this.adminUsername = this.loginForm.controls.username.value;
  //   this.adminPassword = this.loginForm.controls.password.value;
  //   this._router.navigate(['/admin-home',this.adminUsername, this.adminPassword]);
  //}
///////////////////////ADMIN//////////////////////////////

}
