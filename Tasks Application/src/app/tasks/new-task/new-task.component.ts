import { Component, Output,Input, EventEmitter, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false, // To run Module based Component standalone should be false. Can be omitted if declared in a module
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TasksService)

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
