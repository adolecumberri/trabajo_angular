import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddMoviesComponent } from './pages/add-movies/add-movies.component';

/* Componentes  para enroutar*/
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserUpdateComponent } from './pages/user/update/user_update.component';
import { UserMainComponent } from './pages/user/main/user_main.component';

/*
Path por defecto en determinados lugares ?
 */ 
  {path: "**", pathMatch: "full", redirectTo: "home"}
 */

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "update", component: UserUpdateComponent},
  {path: "main", component: UserMainComponent},
  {path: "movies", component: HomeComponent},
  { path: "movies/add-movies", component: AddMoviesComponent },
  { path: "**", pathMatch: "full", redirectTo:"/movies"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
