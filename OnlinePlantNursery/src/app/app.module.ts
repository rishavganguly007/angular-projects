import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SeedComponent } from './product/seed/seed.component';
import { PlantComponent } from './product/plant/plant.component';
import { PlanterComponent } from './product/planter/planter.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  { path: 'products', component: ProductComponent, children:[
    { path: 'seeds', component: SeedComponent },
    { path: 'plants', component: PlantComponent },
    { path: 'planters', component: PlanterComponent }
  ] },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SeedComponent,
    PlantComponent,
    PlanterComponent,
    CartComponent,
    OrderComponent,
    CustomerComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
