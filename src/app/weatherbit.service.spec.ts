import { TestBed } from '@angular/core/testing';

import { BitweatherService } from './bitweather.service';

describe('BitweatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitweatherService = TestBed.get(BitweatherService);
    expect(service).toBeTruthy();
  });
});
