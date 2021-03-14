import { TestBed } from '@angular/core/testing';

import { TissueImageService } from './tissueImage.service';

describe('TissueImageService', () => {
  let service: TissueImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TissueImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
