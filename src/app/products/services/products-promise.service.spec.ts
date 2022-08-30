import { TestBed } from '@angular/core/testing';

import { ProductsPromiseService } from './products-promise.service';

describe('ProductsPromiseService', () => {
  let service: ProductsPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
