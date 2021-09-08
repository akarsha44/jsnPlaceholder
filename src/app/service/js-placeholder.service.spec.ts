import { TestBed } from '@angular/core/testing';

import { JsPlaceholderService } from './js-placeholder.service';

describe('JsPlaceholderService', () => {
  let service: JsPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
