import { Component, OnChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDialog } from 'src/app/types/intefaces';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../dialogs/custom-dialog/custom-dialog.component';
import { ReactdialogComponent } from '../dialogs/reactdialog/reactdialog.component';
import { CopiedphonenumberService } from '../../services/copyphonenumber/copiedphonenumber.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnChanges {
  constructor(
    public phoneService: CopiedphonenumberService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (window.innerWidth < 600) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
  }

  ngOnChanges() {
    if (window.innerWidth < 600) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
  }

  changeValues(event: any) {
    if (event.target.innerWidth < 600) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CustomDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isPhone = false;

  showTitle = true;

  changeTitleShow(value = !this.showTitle) {
    this.showTitle = value;
  }

  handleDrawerClick() {
    this.changeTitleShow();
  }

  get titleName() {
    return this.showTitle ? 'show' : 'hide';
  }

  phoneDialog: IDialog = {
    title: 'Phone Number',
    content: '843-476-2895',
  };

  matDialogOpen: boolean = false;

  changeMatDialogOpen(): void {
    this.matDialogOpen = !this.matDialogOpen;
  }
}
