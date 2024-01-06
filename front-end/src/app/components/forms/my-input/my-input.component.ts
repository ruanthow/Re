import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-input',
  standalone: true,
  imports: [],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.scss'
})
export class MyInputComponent {
    @Input()  
    label:String = "";

    @Input({required:true})
    id:String = "";

    @Input()
    type:String = "text" || "email" || "password";
}
