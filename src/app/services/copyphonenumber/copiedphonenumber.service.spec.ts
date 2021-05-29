import { TestBed } from '@angular/core/testing';

import { CopiedphonenumberService } from './copiedphonenumber.service';

describe('CopiedphonenumberService', () => {
  let service: CopiedphonenumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopiedphonenumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
