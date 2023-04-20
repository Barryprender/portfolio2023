import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ExperienceServiceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
