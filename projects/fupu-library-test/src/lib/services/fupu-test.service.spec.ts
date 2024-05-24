import { TestBed } from '@angular/core/testing';

import { FupuTestService } from './fupu-test.service';

describe('FupuTestService', () => {
  let service: FupuTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FupuTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
