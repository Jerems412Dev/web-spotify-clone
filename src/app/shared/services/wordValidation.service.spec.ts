/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WordValidationService } from './wordValidation.service';

describe('Service: WordValidation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordValidationService]
    });
  });

  it('should ...', inject([WordValidationService], (service: WordValidationService) => {
    expect(service).toBeTruthy();
  }));
});
