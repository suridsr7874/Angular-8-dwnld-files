import { TestBed } from '@angular/core/testing';

import { S2Service } from './s2.service';

describe('S2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: S2Service = TestBed.get(S2Service);
    expect(service).toBeTruthy();
  });
});
