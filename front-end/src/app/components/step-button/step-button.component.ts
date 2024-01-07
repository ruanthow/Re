import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-step-button',
  standalone: true,
  imports: [],
  templateUrl: './step-button.component.html',
  styleUrl: './step-button.component.scss'
})
export class StepButtonComponent {

    @Input({transform: booleanAttribute})
    active = false;

  
}
