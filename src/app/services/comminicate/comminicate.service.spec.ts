import { TestBed } from '@angular/core/testing';

import { ComminicateService } from './comminicate.service';

describe('ComminicateService', () => {
  let service: ComminicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComminicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
