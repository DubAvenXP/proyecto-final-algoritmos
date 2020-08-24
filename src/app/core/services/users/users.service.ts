import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private api: ApiService
  ) { }

  getUsers(endPoint){
    return this.api.getMethod(endPoint);
  }

}
