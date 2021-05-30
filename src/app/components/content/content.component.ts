import { AfterContentInit, Component, HostListener, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { NgZone } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, AfterContentChecked, OnChanges {


  constructor(
    private host: ElementRef, 
    private zone: NgZone,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(){
    this.changeColValue();
  }

  ngOnChanges(){
    this.changeColValue()
  }

  ngAfterContentChecked(){
    this.changeColValue();
  }

  onResize(event:any){

    this.width = event.target.innerWidth ;
    this.changeColValue();
  }

  changeColValue():void{
    if(this.width<500){
      this.cols = 2
    }
    else{
      this.cols = 1
    }
  }


  width:number = 1000;  
  cols = 2; 
  


  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)')

  

}
