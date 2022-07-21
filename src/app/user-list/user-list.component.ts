import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/User.service";
import { IUser } from "../interface/IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: IUser[] | any = [];

  keyword: string = '';

  ngOnInit(): void {
    this.userService.getUsers('', 0)
      .subscribe(data => this.users = data);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => console.log('User is deleted'));
    return this.userService.getUsers('', 0).subscribe(data => this.users = data)
  }

}
