import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesListComponent } from './message/messages-list/messages-list.component';

const routes: Routes = [
  { path: '', component: MessagesListComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
