import { ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit, AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.text = `    
      $(function(){
          CateroryToggle();
          $('.pagination').rPage();
          var SearchInput = $('.site-header .search-form input.form-control');
          SearchInput.val(SearchInput.val());
          var strLength= SearchInput.val().length;
          SearchInput.focus();
          SearchInput[0].setSelectionRange(strLength, strLength);
          $(window).on('load', function(){
              setTimeout(function(){
                  $('.scroll-down').fadeOut();
              }, 6000);
          });
      });
    `;
    this._elementRef.nativeElement.appendChild(s);
  }

}
