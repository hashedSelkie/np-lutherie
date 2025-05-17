import { Component } from '@angular/core';

@Component({
  selector: 'app-trade-instruments',
  templateUrl: './trade-instruments.component.html',
  styleUrls: ['./trade-instruments.component.scss']
})
export class TradeInstrumentsComponent {
  enlarge(event: any) {
    let src: string = (event.target as HTMLImageElement).src;
    let shower = document.getElementById("shower");
    shower.style.display = "block"
    let view = document.getElementById("viewed-image");
    let oldsrc = view as HTMLImageElement;
    oldsrc.src = src;
    let type: string = (event.target as HTMLImageElement).className;
    document.body.style.overflow = "hidden";


    if (type == "landscape") {
      console.log("A landscape pic has been clicked")


    }
    else {
      console.log("A landscape pic was not clicked")


    }
  }

  close(event: any) {
    let shower = document.getElementById("shower");
    shower.style.display = "none"
    console.log("x has been clicked");
    document.body.style.overflow = "overlay";
  }
}
