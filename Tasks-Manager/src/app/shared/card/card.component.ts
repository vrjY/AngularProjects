import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false, // To run Module based Component standalone should be false. Can be omitted if declared in a module
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
