import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language: string;

  constructor() {
    this.language = 'en'; 
  }

  getLanguage(): string {
    return this.language;
  }

  setLanguage(language: string) {
    this.language = language;
  }
}
