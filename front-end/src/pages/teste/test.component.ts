import { CommonModule } from "@angular/common";
import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router";



@Component({
    selector: 'test-page',
    standalone: true,
    imports:[CommonModule, RouterOutlet],
    templateUrl: './test.component.html'

})

export class TestComponent{
    isChange = true;
}