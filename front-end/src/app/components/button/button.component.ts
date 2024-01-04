import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent{

  constructor(){
    
  }
 
  onClick(e:EventTarget|null){
    let buttonHtml = e as HTMLElement;
    buttonHtml.classList.add("buttonAnimation");
    setTimeout(()=>{
    buttonHtml.classList.remove("buttonAnimation");
    },500)
  }
}
