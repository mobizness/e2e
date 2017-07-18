import { Component, Directive, ElementRef } from '@angular/core';
import { RouterModule, Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  constructor(public router: Router){}
  
  name: string = "Wallpapers";
  names: string[] = ["Members", "Groups", "Wallpapers"];

  clicked(value): void {
    if(value == "Members")
      this.router.navigate(['search-member']);
    if(value == "Wallpapers")
      this.router.navigate(['search-wallpaper']);
    alert(value);
    console.log("ok");
  }
}
