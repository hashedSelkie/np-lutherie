import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  toTop() {
    window.scrollTo(0, 0);
  }

  openMenu(event: Event) {
    var desktop = document.getElementById("myNav").style.height != "100%";
    document.getElementById("myNav").style.height = "100%";
    if (desktop) {
      document.body.style.overflow = "overlay";
    } else {
      document.body.style.overflow = "hidden";
    }

  }

  closeMenu(event: Event) {
    document.getElementById("myNav").style.height = "0%";
    document.body.style.overflow = "overlay";
  }

  closeAndTop(event: Event) {
    window.scrollTo(0, 0);
    document.getElementById("myNav").style.height = "0%";
    document.body.style.overflow = "overlay";
  }

  openDropdown(event: Event) {
    var open = document.getElementById("mob-instruments-dropdown-list").style.height == "100%";
    if (open) {
      document.getElementById("mob-instruments-dropdown-list").style.height = "0";
      document.getElementById("dropdown-instruments-title").style.background = "#323131";
      document.getElementById("dropdown-instruments-title").style.margin = "0 auto 7vh auto";
      document.getElementById("dropdown-instruments-title").style.padding = "0";
      // document.body.style.overflow = "hidden";
    } else {
      document.getElementById("mob-instruments-dropdown-list").style.height = "100%";
      document.getElementById("dropdown-instruments-title").style.background = "#3f3f3f";
      document.getElementById("dropdown-instruments-title").style.margin = "0";
      document.getElementById("dropdown-instruments-title").style.padding = "0 0 15px 0";
      // document.body.style.overflow = "hidden";
    }
    console.log(open);

  }
}
