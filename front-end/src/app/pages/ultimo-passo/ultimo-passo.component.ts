import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BodyResultComponent } from '../../components/body-result/body-result.component';

@Component({
  selector: 'app-ultimo-passo',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent, BodyResultComponent],
  templateUrl: './ultimo-passo.component.html',
  styleUrl: './ultimo-passo.component.scss'
})
export class UltimoPassoComponent {

}
