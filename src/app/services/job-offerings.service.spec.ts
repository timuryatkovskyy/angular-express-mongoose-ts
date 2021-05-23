import { TestBed } from '@angular/core/testing';

import { JobOfferingsService } from './job-offerings.service';

describe('JobOfferingsService', () => {
  let service: JobOfferingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobOfferingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
