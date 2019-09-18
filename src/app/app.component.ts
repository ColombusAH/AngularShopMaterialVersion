import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private user: UserService) {}
  title = 'shopMaterialVersion';

  logout(sidenavbar) {
    sidenavbar.toggle();
    this.user.logout();
  }
}
