import { ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverView implements OnInit, AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.text = `    
        $(function(){
            GalleryGrid();
        });
    `;
    this._elementRef.nativeElement.appendChild(s);
  }
}
