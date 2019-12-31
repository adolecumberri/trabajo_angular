import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddMoviesComponent } from './pages/add-movies/add-movies.component';


const routes: Routes = [
  {path: "movies", component: HomeComponent},
  { path: "movies/add-movies", component: AddMoviesComponent },
  { path: "**", pathMatch: "full", redirectTo:"/movies"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
