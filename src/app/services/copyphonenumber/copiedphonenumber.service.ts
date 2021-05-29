import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CopiedphonenumberService {
  constructor(public _snackbar: MatSnackBar) {}
  
  action(){
    this._snackbar.open("copied to clipboard", "close", {duration:2000, panelClass:['changeColor'], horizontalPosition:"right"})
  }
}
