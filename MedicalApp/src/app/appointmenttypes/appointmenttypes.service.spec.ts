import { TestBed, inject } from '@angular/core/testing';

import { AppointmentTypesService } from './appointmenttypes.service';

describe('AppointmenttypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentTypesService]
    });
  });

  it('should be created', inject([AppointmentTypesService], (service: AppointmentTypesService) => {
    expect(service).toBeTruthy();
  }));
});
