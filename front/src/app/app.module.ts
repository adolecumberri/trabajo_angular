import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Modules
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
