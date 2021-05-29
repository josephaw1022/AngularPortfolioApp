import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CopiedphonenumberService } from '../../../services/copyphonenumber/copiedphonenumber.service';
@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
})
export class CustomDialogComponent implements OnDestroy{
  constructor(public phoneService : CopiedphonenumberService) {}

  phoneNumber: string = '8434762895';

  value: string = 'Copy to clipboard';
  myposition = 'right';

  changeValue(): void {
    this.value = 'Copied!';

  }


  ngOnDestroy(){
    if (this.value==='Copied!'){
      this.phoneService.action();
    }
  }




}
