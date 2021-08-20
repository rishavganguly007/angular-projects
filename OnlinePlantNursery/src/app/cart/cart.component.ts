import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {}
  ngOnInit() {}
  
  seedItems = this.cartService.getSeedItems();
  plantItems = this.cartService.getPlantItems();
  planterItems = this.cartService.getPlanterItems();


  seedItemQuantity: number = 1;
  plantItemQuantity: number = 1;
  planterItemQuantity: number = 1;
  
  seedSum: number = 1;
  
  plantSum: number = 1;
  planterSum: number = 1;


  seedTotal: number = this.seedSum * this.seedItems.length;
  plantTotal: number = this.plantSum * this.plantItems.length;
  planterTotal: number = this.planterSum * this.planterItems.length;
  totalPrice: number = this.seedTotal + this.plantTotal + this.planterTotal;

  updateSeedSum(event): void {
    if (this.seedItems.length != 0) {
      this.seedSum = this.seedItems
    .map(x => x.seedsCost)
    .reduce((a, b) => {
      return a + b;
    });
  //  this.seedTotal = this.seedSum * this.seedItems.length;
    }
    else
    this.seedSum = 0

    this.seedItemQuantity = event.target.value
    this.seedTotal = this.seedSum * this.seedItemQuantity ;
    //this.seedItemQuantity = event.target.value;
    this.updateTotalPrice();
  }
  updatePlantSum(event): void {
    if (this.plantItems.length != 0) {
      this.plantSum = this.plantItems
    .map(x => x.plantCost)
    .reduce((a, b) => {
      return a + b;
    });
  //  this.plantTotal = this.plantSum * this.plantItems.length;
    }
    else
    this.plantSum = 0
    
    this.plantItemQuantity = event.target.value;
    this.plantTotal = this.plantSum * this.plantItemQuantity;
    this.updateTotalPrice();
  }
  updatePlanterSum(event): void {
    if (this.planterItems.length != 0) {
      this.planterSum = this.planterItems
    .map(x => x.planterCost)
    .reduce((a, b) => {
      return a + b;
    });

  //  this.planterTotal = this.planterSum * this.planterItems.length;
    }
    else
    this.planterSum = 0

    this.planterItemQuantity = event.target.value;
    this.planterTotal = this.planterSum * this.planterItemQuantity;
    this.updateTotalPrice();
  }

  updateTotalPrice():void{
    this. totalPrice= this.seedTotal + this.plantTotal + this.planterTotal;

  }
  
}
