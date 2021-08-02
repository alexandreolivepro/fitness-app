import { LocalStorageService } from '@Services/local-storage/local-storage.service';
import { SecurityService } from '../services/security.service';
import { InterceptorOutGoing } from './http-interceptor';

describe('InterceptorOutGoing', () => {
  it('should create an instance', () => {
    expect(new InterceptorOutGoing({} as LocalStorageService, {} as SecurityService)).toBeTruthy();
  });
});
