import { TestBed } from '@angular/core/testing';

import { EducationService } from './education-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('EducationServiceService', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(EducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
