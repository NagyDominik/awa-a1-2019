import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({transform: 'translateY(-10%)', opacity: 0}),
        animate('200ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ])
    ])
  ]
})
export class MessagesListComponent {
  title = 'Morse App';
  messages: Observable<any[]>;
  messagesPaged: Observable<any[]>;
  latest: any;
  message = '';
  humanReadableMessage = '';
  time: number;

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessagesLastByLimit(10);
  }

  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }

  send() {
    const time = new Date();
    this.messageService.addMessage(time, this.message.trim()).then(done => {
      console.log('saved');
    }, err => {
      console.log(err);
    });
    this.clear();
  }

  dot() {
    this.message += '.';
  }

  dash() {
    this.message += '-';
  }

  space() {
    this.message += '/';
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  next() {
    this.message += ' ';
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  clear() {
    this.message = '';
    this.humanReadableMessage = '';
  }

  backspace() {
    this.message = this.message.substring(0, this.message.length - 1);
  }
}
