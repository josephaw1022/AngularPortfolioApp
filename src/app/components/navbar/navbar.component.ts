import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDialog } from 'src/app/types/intefaces';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private breakpointObserver: BreakpointObserver, public dialog:MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CustomDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  showTitle = true;

  changeTitleShow(value = !this.showTitle) {
    this.showTitle = value;
  }

  handleDrawerClick() {
    this.changeTitleShow();
  }

  get titleName(){
    return this.showTitle? 'show' :'hide'
  }
  
  phoneDialog:IDialog = { 
    title:"Phone Number",
    content:"843-476-2895"
  }

  matDialogOpen: boolean = false ; 

  changeMatDialogOpen ():void{ 
    this.matDialogOpen=!this.matDialogOpen
  }

}
