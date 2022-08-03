import { TestBed } from '@angular/core/testing';

import { ReloadComponentService } from './reload-component.service';

describe('ReloadComponentService', () => {
  let service: ReloadComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
