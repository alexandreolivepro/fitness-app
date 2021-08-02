import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { Menu } from 'primeng/menu';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let spectator: Spectator<SidebarComponent>;
  const createComponent = createComponentFactory({
    component: SidebarComponent,
    declarations: [
      MockComponent(Menu),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should see the logo', () => {
    expect(spectator.query('.app-logo')).not.toBeNull();
  });

  it('should see the menu', () => {
    expect(spectator.query('p-menu')).not.toBeNull();
  });
});
