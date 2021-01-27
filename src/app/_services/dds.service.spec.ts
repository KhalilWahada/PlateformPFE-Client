import { TestBed } from '@angular/core/testing';

import { DdsService } from './dds.service';

describe('DdsService', () => {
  let service: DdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
