import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalkComponent } from './talk.component';

const routes: Routes = [
  {
    path: '',
    component: TalkComponent,
    children: [
      { path: ':talkid', component: TalkComponent },
      { path: '**', component: TalkComponent },
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalkRoutingModule { }
