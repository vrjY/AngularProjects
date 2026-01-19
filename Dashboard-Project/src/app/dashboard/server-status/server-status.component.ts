import { Component, DestroyRef, OnDestroy, OnInit, ViewEncapsulation, inject, signal, effect} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  // encapsulation: ViewEncapsulation.None, // Apply styles globally
  // host: {
  //   class: 'server-status'
  // }
})
export class ServerStatusComponent implements OnInit {                     // Implement is used to implement ngOnInit
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef)

  constructor () {
    effect(() => {                                                         // effect to log whenever currentStatus changes.
      console.log(this.currentStatus());
    });
    console.log(this.currentStatus());
  }

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}







// effect() allows you to perform cleanup work before the effect function runs again(eg. to clean some timer or something like that).
// onCleanup hook which you can execute as part of your effect function to define what should happen before the effect code runs the next time.
// Example ->

// effect((onCleanup) => {
//   const tasks = getTasks();
//   const timer = setTimeout(() => {
//     console.log(`Current number of tasks: ${tasks().length}`);
//   }, 1000);
//   onCleanup(() => {
//     clearTimeout(timer);
//   });
// });
