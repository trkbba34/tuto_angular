import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  entredTitle = '';
  entredSummary = '';
  entredDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSumibt() {
    this.tasksService.addTask(
      {
        title: this.entredTitle,
        summary: this.entredSummary,
        date: this.entredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
