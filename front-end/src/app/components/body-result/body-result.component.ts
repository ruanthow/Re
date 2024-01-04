import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-body-result',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './body-result.component.html',
  styleUrl: './body-result.component.scss'
})
export class BodyResultComponent{

    @ViewChild('pHTML') pHTML : ElementRef | null;
    @ViewChild('idInfoCopy') idInfoCopy : ElementRef | null;
    infoCopy : string
    text : string;
    faCopy : any;
    render : Renderer2 | null;
    faCloud : any;

    constructor(){
       this.faCopy = faCopy;
       this.faCloud = faCloudArrowDown;
       this.pHTML = null;
       this.infoCopy = "Copiar";
       this.text = "";
       this.render = null
       this.idInfoCopy = null
    }

    ngAfterViewInit(){
     
    }

    copyText(){
      navigator.clipboard.writeText(this.pHTML?.nativeElement.innerText)
      this.infoCopy = "Texto copiado"
      setTimeout(()=>{
        this.idInfoCopy?.nativeElement.classList.add("infoCopyEffect");
      },0)
    }
}
