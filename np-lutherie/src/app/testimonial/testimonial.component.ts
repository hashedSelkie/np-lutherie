import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  num = 0;

  addImage(){
    this.num = this.num + 1;
    let newNum = this.num;
    let x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    x.setAttribute("id", "upload" + newNum);
    x.setAttribute("name", "attachment" + newNum);
    x.setAttribute("class", "image-field");
    x.setAttribute("accept", "image/png, image/jpeg");
    let div = document.getElementById("added-image");
    div.appendChild(x); 
    let y = document.createElement("button");
    y.setAttribute("type", "button")
    y.setAttribute("value", "upload" + newNum)
    y.innerHTML = "Remove";
    y.style.margin = "10px 0";
    let connect = y.value;
    y.onclick = function (){
      let element = document.getElementById(connect);
      element.remove()
      y.remove();
    }
    div.appendChild(y);
  }

 
}
