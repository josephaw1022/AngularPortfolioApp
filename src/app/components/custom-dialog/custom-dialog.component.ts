import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent  {

  phoneNumber:string = "8434762895"; 

  value:string = "Copy to clipboard";
  myposition= "right"; 
  changeValue():void{ 
    this.value = "Copied!";
    
    
  }

}
