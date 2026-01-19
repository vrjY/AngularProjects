import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  encapsulation: ViewEncapsulation.None, // Apply styles globally
  host: {
    class: 'server-status'
  }
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
