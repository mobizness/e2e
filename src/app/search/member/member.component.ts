import { ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit, AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.text = `    
      $(function(){
          $('.pagination').rPage();
      });
    `;
    this._elementRef.nativeElement.appendChild(s);
  }
}
