import { ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class MainWallpaperComponent implements OnInit, AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.text = `    
      $(function(){
          PopularListing();
          $('.bd_textarea').autoResize();
      });
    `;
    this._elementRef.nativeElement.appendChild(s);
  }

}
