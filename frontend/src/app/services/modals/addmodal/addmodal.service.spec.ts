import { TestBed } from '@angular/core/testing';

import { AddmodalService } from './addmodal.service';

describe('AddmodalService', () => {
  let service: AddmodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
