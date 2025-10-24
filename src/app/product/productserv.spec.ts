import { TestBed } from '@angular/core/testing';

import { Productserv } from './productserv';

describe('Productserv', () => {
  let service: Productserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
