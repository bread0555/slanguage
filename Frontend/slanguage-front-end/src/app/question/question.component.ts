import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
  providers: [MessageService]
})
export class QuestionComponent {
  @Input() question: { Question: string; Options: string[]; Answer: string, Completed: boolean } = {
    Question: '',
    Options: [],
    Answer: '',
    Completed: false
  }
  @Output() answered: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private messageService: MessageService) {}

  submitted(answer: string): void {
    if (answer == this.question.Answer) {
      this.messageService.add({ severity: 'success', summary: 'Correct', sticky: false});
      setTimeout(() => {
        this.answered.emit(true)
      }, 1000)
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Incorrect', sticky: false});
      setTimeout(() => {
        this.answered.emit(false)
      }, 1000)
    }
  }
  
}
