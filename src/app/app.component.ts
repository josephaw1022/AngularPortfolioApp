import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

  ngOnInit() {}
}
