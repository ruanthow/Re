import { Component, Input } from '@angular/core';
import { scheduled } from 'rxjs';

@Component({
  selector: 'my-textarea',
  standalone: true,
  imports: [],
  templateUrl: './my-textarea.component.html',
  styleUrl: './my-textarea.component.scss'
})
export class MyTextareaComponent {
    @Input({required:true})
    placeholder:String = "";

    @Input({alias:"max-height",required: true})
    maxHeight:String = "";

    keyUp(event: Event){
      
      let tamanho = "2.5rem";
      let textarea = event.currentTarget as HTMLTextAreaElement;
      
      textarea.style.height = tamanho;

      let scHeight = textarea.scrollHeight;
      console.log(scHeight);
      textarea.style.height = `${scHeight}px`;

    }
    
}
