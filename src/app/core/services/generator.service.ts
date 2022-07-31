import { Injectable, InjectionToken } from '@angular/core';
import { GeneratorID } from './gen-id.generator'

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private generatorID: GeneratorID;

  constructor(){
    this.generatorID = new GeneratorID()
  }

  generate(length: number): string {
    const symbols = [
      ...[...Array(10)].map((_, i) => String.fromCharCode(i + 48)), // 0-9
      ...[...Array(26)].map((_, i) => String.fromCharCode(i + 65)), // A-Z
      ...[...Array(26)].map((_, i) => String.fromCharCode(i + 97))  // a-z
    ];
    return new Array(length).fill(0).map(() => symbols[Math.floor(Math.random() * symbols.length)]).join('');
  }

  getNewID() {
    return this.generatorID.genID();
  }

}

export const GeneratorToken = new InjectionToken<string>('generatedString');
