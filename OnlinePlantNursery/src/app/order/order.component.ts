import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Customer } from '../customer';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order = {} as Order; 
  customer = {} as Customer;
  
  constructor(private orderService: OrderService) { 
    this.customer.customerId = 7;
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void{
    this.order = this.orderService.getOrder();
    console.log("order compo" + this.order.plantQuantity);
  }

  onConfirmOrder(): void{
    this.order.customer = this.customer;
    this.order.transactionMode = "cod"
    console.log("orderCom" , this.order);
    this.orderService.addOrder(this.order).subscribe(
      (response: Order) =>{
        console.log(response);
        // this.getEmployees();
        // addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        
      }
    );
  }

}
