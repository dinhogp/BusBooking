import { TestBed, inject } from '@angular/core/testing';

import { RowDetailService } from './row-detail.service';

describe('RowDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RowDetailService]
    });
  });

  it('should be created', inject([RowDetailService], (service: RowDetailService) => {
    expect(service).toBeTruthy();
  }));
});
