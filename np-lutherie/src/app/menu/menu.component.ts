import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  toTop(){
    window.scrollTo(0, 0);
  }

  openMenu(event: Event){
    document.getElementById("myNav").style.height = "100%";
    document.body.style.overflow = "hidden"; 
  }

  closeMenu(event: Event){
    document.getElementById("myNav").style.height = "0%";
    document.body.style.overflow = "overlay"; 
  }

  closeAndTop(event: Event){
    window.scrollTo(0, 0);
    document.getElementById("myNav").style.height = "0%";
    document.body.style.overflow = "overlay"; 
 
  }
}
