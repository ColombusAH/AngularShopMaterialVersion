import { ShowIfLoggedInDirective } from './directives/show-if-logged-in.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIfAdminDirective } from './directives/show-if-admin.directive';

@NgModule({
  declarations: [ShowIfLoggedInDirective, ShowIfAdminDirective],
  imports: [CommonModule],
  exports: [ShowIfLoggedInDirective, ShowIfAdminDirective]
})
export class SharedModule {}
