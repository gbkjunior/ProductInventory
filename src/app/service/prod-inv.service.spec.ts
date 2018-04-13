import { TestBed, inject } from '@angular/core/testing';

import { ProdInvService } from './prod-inv.service';

describe('ProdInvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdInvService]
    });
  });

  it('should be created', inject([ProdInvService], (service: ProdInvService) => {
    expect(service).toBeTruthy();
  }));
});
