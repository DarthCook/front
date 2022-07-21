import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/User.service";
import { IUser } from "../../interface/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: IUser[] | any;

  constructor(private userService: UserService
  ) { }


  ngOnInit(): void {
    this.userService.getUsers('', 0)
      .subscribe(data => this.users = data);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(()=> {
      console.log('User is deleted');
      });
  }

  createUser(user: {name: string; sex: string; age: number; email: string}) {
    this.userService.createUser(user).subscribe(responseData => {
      console.log(responseData);
    });
  }



}
