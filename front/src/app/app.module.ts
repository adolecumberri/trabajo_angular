import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';


/* Componentes para NgModule */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserMainComponent } from './pages/user/main/user_main.component';
import { UserUpdateComponent } from './pages/user/update/user_update.component';
import { AddMoviesComponent } from './pages/add-movies/add-movies.component';
import { MovieService } from './service/movie.service';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    UserUpdateComponent,
    UserMainComponent,
    AddMoviesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AvatarModule,
    FormsModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
