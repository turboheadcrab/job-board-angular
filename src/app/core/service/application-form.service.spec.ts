import { TestBed } from '@angular/core/testing';

import { ApplicationFormService } from './application-form.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ApplicationFormService', () => {
  let service: ApplicationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ApplicationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
