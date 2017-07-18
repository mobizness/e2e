import { ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.text = `    
      if ($(window).width() < 1900) {
          BadgeSlider();
      }
      $(window).resize(function () {
          BadgeSlider();
          //InfoSlide();
      });
          
      if ($(window).width() < 481) {
          window.addEventListener('orientationchange', function() {
              InfoSlide();
          }, false);
      }
      EditProfile();
    `;
    this._elementRef.nativeElement.appendChild(s);
  }

}
