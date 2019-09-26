import { TestBed } from '@angular/core/testing';

import { InstitutoResolverService } from './instituto-resolver.service';

describe('InstituteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstitutoResolverService = TestBed.get(InstitutoResolverService);
    expect(service).toBeTruthy();
  });
});
