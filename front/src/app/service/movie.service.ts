import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.interface";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  apiUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {
    console.log("Instancia nuestro movie service");
  }
  
  /* EL tipo de header */
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });


  //  Ver todas las películas
  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiUrl}/movies/home`);
  }
  // Añadir películas
  saveMovie(movie: Movie): Observable<Movie[]> {
    return this.httpClient.post<Movie[]>(`${this.apiUrl}/movies/home`, movie);
  }


}
