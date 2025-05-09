import { TestBed } from '@angular/core/testing';

import { CommetsService } from './commets.service';

describe('CommetsService', () => {
  let service: CommetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
