import { TestBed } from '@angular/core/testing';

import { InfosystemService } from './infosystem.service';

describe('InfosystemService', () => {
  let service: InfosystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
