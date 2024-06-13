import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private encryptionKey: string = '59d407208c0bfb4fc52780506cdecd';

  constructor() { }

  encrypt(text: string): string {if (!text) {
    return '';
  }
    return CryptoJS.AES.encrypt(text, this.encryptionKey).toString();
  }

  decrypt(text: string): string {
    if (!text) {
      return '';
    }
    return CryptoJS.AES.decrypt(text, this.encryptionKey).toString(CryptoJS.enc.Utf8);
  }

}
