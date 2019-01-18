import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class DisplayErrorsService {

  constructor(public snackBar: MatSnackBar) { }

  displayErrors(message1: number, message2: string) {
    this.openSnackBar(`Http status: ${message1}`, message2);
  }

  openSnackBar(message1: string, message2: string) {
    this.snackBar.open(message1, message2, {
      duration: 5000,
    });
  }
}
