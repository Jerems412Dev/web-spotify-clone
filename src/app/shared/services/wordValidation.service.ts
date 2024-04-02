import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordValidationService {
  private wordValidSource = new BehaviorSubject<boolean>(false);
  wordValid$ = this.wordValidSource.asObservable();

  validateWord(isValid: boolean) {
    this.wordValidSource.next(isValid);
  }
}
