import { Pipe, PipeTransform } from '@angular/core';
import { EncryptionService } from '../services/Encryption.service';

@Pipe({
  name: 'encryption',
  standalone: true
})
export class EncryptionPipe implements PipeTransform {

  constructor(private encryptionService: EncryptionService) {}

  transform(value: string): string {
    return this.encryptionService.encrypt(value);
  }

}
