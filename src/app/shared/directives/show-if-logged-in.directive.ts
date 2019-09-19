import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Directive({
  selector: '[appShowIfLoggedIn]'
})
export class ShowIfLoggedInDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private userService: UserService
  ) {}

  @Input() set appShowIfLoggedIn(loggedInRequired: boolean) {
    if (
      (loggedInRequired && this.userService.isLoggedIn) ||
      (!loggedInRequired && !this.userService.isLoggedIn)
    ) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
