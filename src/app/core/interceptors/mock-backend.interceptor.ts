import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpClient
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { usersData } from '../../data/users.data';
import { productsData } from '../../data/products.data';
import { categoriesData } from './../../data/categories.data';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private http: HttpClient) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, body } = request;
    console.log('intercept func');

    if (url.endsWith('/login') && method === 'POST') {
      const credentials = body;
      console.log(credentials);

      const user = usersData.find(
        user =>
          user.username === credentials.username &&
          user.password === credentials.password
      );
      return of(new HttpResponse({ status: 200, body: user }));
    } else if (url.endsWith('/products')) {
      return of(new HttpResponse({ status: 200, body: productsData }));
    } else if (url.endsWith('/categories')) {
      return of(new HttpResponse({ status: 200, body: categoriesData }));
    }
    return next.handle(request);
  }
}