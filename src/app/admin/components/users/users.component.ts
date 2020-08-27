import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  endpoint = '?results=10';
  constructor(private userService: UsersService ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers(){
    const users = await this.userService.getUsers(this.endpoint);
    console.log(users);
  }

}
