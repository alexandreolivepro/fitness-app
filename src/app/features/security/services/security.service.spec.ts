import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { SecurityService } from './security.service';

describe('SecurityService', () => {
  let spectator: SpectatorService<SecurityService>;
  const createService = createServiceFactory({
    service: SecurityService,
    imports: [HttpClientModule],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
