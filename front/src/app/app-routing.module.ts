import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "movie-detail/:id", component: MovieDetailComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
