import { CartService } from './services/cart.service';
import { UserService } from 'src/app/core/services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackendInterceptor } from './interceptors/mock-backend.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    UserService,
    ProductsService,
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockBackendInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
