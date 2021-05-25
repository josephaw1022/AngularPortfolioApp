import { TestBed } from '@angular/core/testing';

import { ScrollprogressService } from './scrollprogress.service';

describe('ScrollprogressService', () => {
  let service: ScrollprogressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollprogressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
