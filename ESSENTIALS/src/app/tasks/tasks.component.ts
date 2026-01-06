import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: false, // To run Module based Component standalone should be false. Can be omitted if declared in a module
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) { }         //Dependency Injection 

  
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}


