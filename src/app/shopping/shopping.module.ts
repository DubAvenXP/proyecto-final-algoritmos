import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CorouselComponent } from './components/corousel/corousel.component';


@NgModule({
  declarations: [ShoppingComponent, CorouselComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
