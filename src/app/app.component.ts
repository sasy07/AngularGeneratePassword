import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.password = '';
  }
  title = 'AngularGeneratePassword';

  password: string;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;
  onButtonClick() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*();+-';
    let validChar = '';
    if (this.includeNumbers) validChar += numbers;

    if (this.includeLetters) validChar += letters;

    if (this.includeSymbols) validChar += symbols;

    let generatedPassword: string = '';

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }

    this.password = generatedPassword;
  }

  onChangeLength(value : string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  getPassword(): string {
    return this.password;
  }

  onChangeLetter() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumber() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbol() {
    this.includeSymbols = !this.includeSymbols;
  }
}
