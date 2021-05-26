import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PollsComponent } from './views/polls/polls.component';
import { TodoComponent } from './views/todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Skills', component: AboutComponent },
  { path: 'Polls', component: PollsComponent },
  { path: 'Todo', component: TodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
