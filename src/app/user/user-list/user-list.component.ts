import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/User.service";

// interface DataItem {
//   name: string;
//   chinese: number;
//   math: number;
//   english: number;
// }

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit {



  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUsers(): any {
   return this.userService.getUsers();
  }

  readonly users: any = this.getUsers();

  // listOfColumn = [
  //   {
  //     title: 'Name',
  //     compare: null,
  //     priority: false
  //   },
  //   {
  //     title: 'Chinese Score',
  //     compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
  //     priority: 3
  //   },
  //   {
  //     title: 'Math Score',
  //     compare: (a: DataItem, b: DataItem) => a.math - b.math,
  //     priority: 2
  //   },
  //   {
  //     title: 'English Score',
  //     compare: (a: DataItem, b: DataItem) => a.english - b.english,
  //     priority: 1
  //   }
  // ];
  // listOfData: DataItem[] = [
  //   {
  //     name: 'John Brown',
  //     chinese: 98,
  //     math: 60,
  //     english: 70
  //   },
  //   {
  //     name: 'Jim Green',
  //     chinese: 98,
  //     math: 66,
  //     english: 89
  //   },
  //   {
  //     name: 'Joe Black',
  //     chinese: 98,
  //     math: 90,
  //     english: 70
  //   },
  //   {
  //     name: 'Jim Red',
  //     chinese: 88,
  //     math: 99,
  //     english: 89
  //   }
  // ];

}
