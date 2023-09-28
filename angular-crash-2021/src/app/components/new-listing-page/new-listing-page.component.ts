import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  time: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      time: this.time,
      reminder: this.reminder,
      status: false,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
