import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRoutingModule } from './message-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MomentModule } from 'angular2-moment';
import { MatButtonModule, MatProgressSpinnerModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [MessagesListComponent],
  imports: [
    FlexLayoutModule,
    FormsModule,
    MomentModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
