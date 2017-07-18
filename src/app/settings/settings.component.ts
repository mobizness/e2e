import { ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, AfterViewInit {

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
