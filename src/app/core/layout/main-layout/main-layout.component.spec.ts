import { MockComponent } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { UserService } from '@Services/user/user.service';
import { UserServiceMock } from '@Services/user/user.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let spectator: Spectator<MainLayoutComponent>;
  const createComponent = createComponentFactory({
    component: MainLayoutComponent,
    declarations: [
      MockComponent(SidebarComponent),
      MockComponent(HeaderComponent),
    ],
    imports: [
      RouterTestingModule,
    ],
    providers: [
      { provide: UserService, useClass: UserServiceMock },
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  describe('Affichage layout', () => {
    it('should not see sidebar or header', () => {
      expect(spectator.query('app-sidebar')).toBeNull();
      expect(spectator.query('app-header')).toBeNull();
    });

    it('should see sidebar or header', () => {
      spectator.component.userService.setUser({});
      spectator.detectChanges();
      expect(spectator.query('app-sidebar')).not.toBeNull();
      expect(spectator.query('app-header')).not.toBeNull();
    });
  });
});
