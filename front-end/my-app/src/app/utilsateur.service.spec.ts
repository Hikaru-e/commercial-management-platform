import { TestBed } from '@angular/core/testing';

import { UtilsateurService } from './utilsateur.service';

describe('UtilsateurService', () => {
  let service: UtilsateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
