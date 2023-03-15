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
    document.body.style.overflow = "hidden"; 
    let drag = document.getElementById("drag");
    let num  = (event.target as HTMLImageElement).height;

console.log(num);
    
     if(type == "landscape"){
      console.log("A landscape pic has been clicked")
     
      
   
     
    }

    else{
      console.log("A landscape pic was not clicked")
      
     
     
    } 
  }

  close(event: any){
    let shower = document.getElementById("shower");
    shower.style.display = "none"
   console.log("x has been clicked");
   document.body.style.overflow = "overlay"; 
  }

  toTop(){
    window.scrollTo(0, 0);
  }
}
