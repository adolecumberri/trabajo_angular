import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Componentes  para enroutar*/
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserUpdateComponent } from './pages/user/update/user_update.component';
import { UserMainComponent } from './pages/user/main/user_main.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "update", component: UserUpdateComponent},
  {path: "main", component: UserMainComponent},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
