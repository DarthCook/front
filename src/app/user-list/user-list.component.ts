import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/User.service";
import { IUser } from "../interface/IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  constructor(private _userService: UserService) { }

  user: IUser | any;

  users: IUser[] | any = [];

  keyword: string = '';

  sortBy: string = '';

  page: number = 1;


  ngOnInit(): void {
    this._userService.getUsers()
      .subscribe(data => this.users = data);
  }

  getUser(id: number) {
    this._userService.getUser(id).subscribe(data => this.user = data);
  }

  deleteUser(id: number) {
    this._userService.deleteUser(id).subscribe(() => console.log('User is deleted'));
    this._userService.getUsers().subscribe(data => this.users = data);
  }

  searchUsers(keyword: string) {
    this._userService.searchUsers(this.keyword)
      .subscribe(data => this.users = data);
  }

}
