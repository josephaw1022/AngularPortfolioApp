import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PollsComponent } from './views/polls/polls.component';
import { TodoComponent } from './views/todo/todo.component';
import { SkillsComponent } from './views/skills/skills.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Polls', component: PollsComponent },
  { path: 'Todo', component: TodoComponent },
  { path: 'About', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
