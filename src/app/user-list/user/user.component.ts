import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/User.service";
import { IUser } from "../../interface/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService]
})
export class UserComponent implements OnInit {
  userList: any;

  constructor(private userService: UserService
  ) { }


  ngOnInit(): void {
    this.userList = this.userService.getUsers();
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
