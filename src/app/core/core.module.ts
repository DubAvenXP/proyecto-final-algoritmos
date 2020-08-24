import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users/users.service';
import { ApiService } from './services/api/api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UsersService,
    ApiService,
  ]
})
export class CoreModule { }
