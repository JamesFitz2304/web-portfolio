import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrosswordGeneratorComponent } from './crossword-generator/crossword-generator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'crosswords', component: CrosswordGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
