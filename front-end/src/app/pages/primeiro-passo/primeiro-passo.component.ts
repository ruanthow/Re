import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ContainerComponent } from '../../components/container/container.component';
import { StepButtonComponent } from '../../components/step-button/step-button.component';
import { MyInputComponent } from '../../components/forms/my-input/my-input.component';
import { MyTextareaComponent } from '../../components/forms/my-textarea/my-textarea.component';
//OK
@Component({
  selector: 'app-primeiro-passo',
  standalone: true,
  imports: [ButtonComponent, ContainerComponent , StepButtonComponent, MyInputComponent, MyTextareaComponent],
  templateUrl: './primeiro-passo.component.html',
  styleUrl: './primeiro-passo.component.scss'
})
export class PrimeiroPassoComponent {

  @ViewChild('previewVideo') uploadDivPreview?:ElementRef<HTMLElement>;

  teste(event:Event) {

      let input = event.currentTarget as HTMLInputElement;
      let file = input.files as FileList
    
      let url = URL.createObjectURL(file[0]);
      
      this.uploadDivPreview?.nativeElement.classList.remove('hidden');
      this.uploadDivPreview?.nativeElement.setAttribute('src',url);
  }
} 
