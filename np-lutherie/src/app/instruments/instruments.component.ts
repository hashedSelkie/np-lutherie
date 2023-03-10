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
    let type: string = (event.target as HTMLImageElement).className;

    if(type == "landscape"){
      console.log("A landscape pic has been clicked")
      view.style.height = "45vh";
      shower.style.paddingTop = "20vmin";
    }
    else{
      console.log("A landscape pic was not clicked")
      view.style.height = "80vh";
      shower.style.paddingTop = null;
    }
  }

  close(event: any){
    let shower = document.getElementById("shower");
    shower.style.display = "none"
   console.log("x has been clicked");
  }
 
}
