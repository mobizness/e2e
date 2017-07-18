import { ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule, Routes, Params }  from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.text = `    
      $(function(){
          CateroryToggle();
          $('.pagination').rPage();

      });
    `;
    this._elementRef.nativeElement.appendChild(s);
  }

}
