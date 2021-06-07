import {
  AfterContentInit,
  Component,
  HostListener,
  OnInit,
  AfterContentChecked,
  OnChanges,
  NgModule,
  AfterViewInit,
} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { NgZone } from '@angular/core';
import { ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UofscComponent } from '../dialogs/uofsc/uofsc.component';
import { PcComponent } from '../dialogs/pc/pc.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent
  implements OnInit, AfterContentChecked, OnChanges, AfterViewInit
{
  constructor(
    private host: ElementRef,
    private zone: NgZone,
    public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.changeColValue();
  }

  ngOnChanges() {
    this.changeColValue();
  }

  ngAfterViewInit() {
    this.changeColValue();
  }

  ngAfterContentChecked() {
    this.changeColValue();
  }

  onResize(event: any) {
    this.width = event.target.innerWidth;
    this.changeColValue();
  }

  uofscdialog = UofscComponent;
  pcdialog = PcComponent;

  openDialog(component: any): void {
    const dialogRef = this.dialog.open(component);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  changeColValue(): void {
    if (window.innerWidth < 800 == true) {
      this.cols = 2;
      this.rows = 1;
    }
    if (window.innerWidth >= 800 == true) {
      this.cols = 1;
      this.rows = 2;
    }
    this.isSmallScreen =
      this.breakpointObserver.isMatched('(max-width: 800px)');
  }

  width: number = window.innerWidth;
  cols = 2;
  rows = 1;

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 800px)');
}
