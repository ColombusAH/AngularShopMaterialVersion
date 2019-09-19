import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { observable, autorun, computed, action } from 'mobx';
import { take, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @observable
  private user: User;
  @observable private _isLoggedIn: boolean;

  private readonly apiUrl = 'backend/api';

  constructor(private http: HttpClient) {
    this.user = {
      username: '',
      password: '',
      role: ''
    };

    this._isLoggedIn = false;
  }

  // computed

  @computed get isLoggedIn() {
    return this._isLoggedIn;
  }

  @computed get isAdmin() {
    return this.user.role === 'admin';
  }

  //actions

  @action login(username: string, password: string) {
    return this.http
      .post<User>(this.apiUrl + '/login', { username, password })
      .pipe(
        take(1),
        map(user => {
          if (user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            this._isLoggedIn = true;
            return user;
          } else {
            this._isLoggedIn = false;
            return undefined;
          }
        })
      );
  }

  @action logout() {
    localStorage.removeItem('user');
    this._isLoggedIn = false;
  }
}
