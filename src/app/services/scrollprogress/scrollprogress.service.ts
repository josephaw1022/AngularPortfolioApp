import { Injectable, HostListener, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollprogressService {
  progresValue: number;
  rangeArray: number[];
  constructor() {
    this.progresValue = 0;
    this.rangeArray = new Array(100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    var element: any = document.documentElement,
      body: any = document.body,
      scrollTop: any = 'scrollTop',
      scrollHeight: any = 'scrollHeight';
    this.progresValue =
      ((element[scrollTop] || body[scrollTop]) /
        (parseInt(element[scrollHeight] || body[scrollHeight]) -
          element.clientHeight)) *
      100;
  }
}
