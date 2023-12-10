import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question: { Question: string; Options: string[]; Answer: string, Completed: boolean } = {
    Question: '',
    Options: [],
    Answer: '',
    Completed: false
  }
  @Output() answered: EventEmitter<boolean> = new EventEmitter<boolean>()

  submitted(answer: string): void {
    if (answer == this.question.Answer) {
      this.answered.emit(true)
    }
    else {
      this.answered.emit(false)
    }
  }
  
}
