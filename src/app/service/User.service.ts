import { Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable()
export class UserService {

  apiURL = 'http://http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    responseType: 'text' as 'json'
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/users');
  }

  public getUser(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/users/' + id);
  }

  public createUser(user: any): Observable<any> {
    return this.httpClient.post(this.apiURL + '/users',
      JSON.stringify(user), this.httpOptions);
  }

  public updateUser(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.apiURL + '/users/' + id,
      JSON.stringify(user), this.httpOptions);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/users/' + id, this.httpOptions);
  }

}
