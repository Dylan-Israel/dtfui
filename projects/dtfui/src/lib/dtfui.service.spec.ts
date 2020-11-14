import { TestBed } from '@angular/core/testing';

import { DtfuiService } from './dtfui.service';

describe('DtfuiService', () => {
  let service: DtfuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtfuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
