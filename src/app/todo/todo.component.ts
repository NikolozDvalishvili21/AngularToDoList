import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule, CommonModule]
})
export class TodoComponent {
  newTask: string = '';
  tasks: { name: string, completed: boolean }[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(task: { name: string, completed: boolean }) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  toggleCompletion(task: { name: string, completed: boolean }) {
    task.completed = !task.completed;  
  }
}
