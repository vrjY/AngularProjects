import { AfterViewInit, Component, ElementRef, EventEmitter, ViewChild, viewChild, viewChildren, output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent implements AfterViewInit{
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');       //format to use form as a signal function: divEl = viewChild<ElementRef>('el');

  // @Output() add = new EventEmitter();
  enteredTitle = '';
  enteredText= '';
  add = output<{title:string, text:string}>();

  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
