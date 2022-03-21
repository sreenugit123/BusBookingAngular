import { TestBed } from '@angular/core/testing';

import { BusbookingService } from './busbooking.service';

describe('BusbookingService', () => {
  let service: BusbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
