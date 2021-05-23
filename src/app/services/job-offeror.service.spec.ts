import { TestBed } from '@angular/core/testing';

import { JobOfferorService } from './job-offeror.service';

describe('JobOfferorService', () => {
  let service: JobOfferorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobOfferorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
