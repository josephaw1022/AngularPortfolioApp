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
    public breakpointObserver: BreakpointObserver
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

  changeColValue(): void {
    if (window.innerWidth < 600 == true) {
      this.cols = 2;
      this.rows = 1;
    }
    if (window.innerWidth >= 600 == true) {
      this.cols = 1;
      this.rows = 2;
    }
    this.isSmallScreen =
      this.breakpointObserver.isMatched('(max-width: 600px)');
  }

  width: number = window.innerWidth;
  cols = 2;
  rows = 1;

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 600px)');
}
