import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent {
 
  enlarge(event: any){
    let src: string = (event.target as HTMLImageElement).src;
    let shower = document.getElementById("shower");
    shower.style.display = "block"
    let view = document.getElementById("viewed-image");
    let oldsrc = view as HTMLImageElement;
    oldsrc.src = src;
  }

  close(event: any){
    let shower = document.getElementById("shower");
    shower.style.display = "none"
   console.log("x has been clicked");
  }
 
}
