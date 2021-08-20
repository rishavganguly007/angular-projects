import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { Planter } from './planter';
import { Seed } from './seed';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  seedItems: Seed[] = [];
  plantItems: Plant[] = [];
  planterItems: Planter[] = [];

  constructor() {}
/*.......Seed............... */
  addSeedToCart(seed: Seed) {
    this.seedItems.push(seed);
  }
  getSeedItems() {
    return this.seedItems;
  }
  

  /*.......Plant............... */
  addPlantToCart(plant: Plant) {
    this.plantItems.push(plant);
  }
  getPlantItems(){
    return this.plantItems;
  }


  /*.......Planter............... */
  addPlanterToCart(planter: Planter) {
    this.planterItems.push(planter);
  }
  getPlanterItems(){
    return this.planterItems;
  }
  
  /*.......Common Operations............... */
  clearCart() {
    this.seedItems = [];
    this.plantItems = [];
    this.planterItems = [];
    
    this.getPlantItems();
    this.getPlanterItems();
    this.getSeedItems();
  }
  
}
