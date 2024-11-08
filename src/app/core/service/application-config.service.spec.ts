import { TestBed } from '@angular/core/testing';

import { ApplicationConfigService } from './application-config.service';

describe('ApplicationService', () => {
  let service: ApplicationConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
