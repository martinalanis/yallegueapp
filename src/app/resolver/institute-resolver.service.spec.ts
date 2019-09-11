import { TestBed } from '@angular/core/testing';

import { InstituteResolverService } from './institute-resolver.service';

describe('InstituteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstituteResolverService = TestBed.get(InstituteResolverService);
    expect(service).toBeTruthy();
  });
});
