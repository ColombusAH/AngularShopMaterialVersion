import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { observable, autorun, computed, action } from 'mobx';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @observable
  user: User;
  @observable private _isLoggedIn: boolean;

  private readonly apiUrl = 'backend/api';

  constructor(private http: HttpClient) {
    this.user = {
      username: '',
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
    this.http
      .post<User>(this.apiUrl + '/login', { username, password })
      .pipe(take(1))
      .subscribe(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this._isLoggedIn = true;
        } else {
          this._isLoggedIn = false;
        }
      });
  }
}
