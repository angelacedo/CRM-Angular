import { TestBed } from '@angular/core/testing';

import { ModifymodalService } from './modifymodal.service';

describe('ModifymodalService', () => {
  let service: ModifymodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifymodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
