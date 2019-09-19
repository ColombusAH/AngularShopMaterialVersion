import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Directive({
  selector: '[appShowIfAdmin]'
})
export class ShowIfAdminDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private userService: UserService
  ) {}

  @Input() set appShowIfAdmin(adminRequired: boolean) {
    console.log(this.userService.isAdmin);

    if (adminRequired && this.userService.isAdmin) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
