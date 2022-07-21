import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry } from "rxjs";
import { IUser } from "../interface/IUser";

@Injectable()
export class UserService {

  apiURL = '/api';
  constructor(private httpClient: HttpClient) {}

  public getUsers(sortBy?: string, page?: number): Observable<IUser[]> {
    if (sortBy === undefined && page === undefined) {
      return this.httpClient.get<IUser[]>(this.apiURL + '/users');
    } else if(sortBy === undefined) {
      return this.httpClient.get<IUser[]>(this.apiURL + '/users?page=' + page);
    } else if (page === undefined) {
      return this.httpClient.get<IUser[]>(this.apiURL + '/users?sortBy=' + page);
    }
    return this.httpClient.get<IUser[]>(this.apiURL + '/users?sortBy='
      + sortBy + '&page=' + page);
  }

  public getUser(id: number): Observable<any> {
    return this.httpClient.get<IUser>(this.apiURL + '/users/' + id);
  }

  public createUser(user: {name: string; sex: string; age: number; email: string}) {
    return this.httpClient.post(this.apiURL + '/users',
      user);
  }

  public updateUser(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.apiURL + '/users/' + id,
      user);
  }

  public deleteUser(id: number) {
    return this.httpClient.delete(this.apiURL + '/users/' + id);
  }

  public searchUsers(keyword: string) {
    return this.httpClient.get<IUser[]>(this.apiURL + '/users/search?keyword=' + keyword);
  }

}
