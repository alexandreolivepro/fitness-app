import { MockComponent } from 'ng-mocks';
import { LogoutComponent } from '@Features/security/components/logout/logout.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
    declarations: [
      MockComponent(LogoutComponent),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should see the logout button', () => {
    expect(spectator.query('app-logout')).toBeDefined();
  });
});
