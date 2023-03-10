import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  enlarge(event: any){
    let src: string = (event.target as HTMLImageElement).src;
    let type: string = (event.target as HTMLImageElement).className;
    let shower = document.getElementById("shower");
    shower.style.display = "block"
    let view = document.getElementById("viewed-image");
    let oldsrc = view as HTMLImageElement;
    oldsrc.src = src;
    
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
