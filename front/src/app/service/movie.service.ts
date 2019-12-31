import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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

  // getMovies(): Observable<Movie> {
  //        return this.httpClient.get<Movie>(`${this.apiUrl}/movies`);
  //      }

  getMovies(id:string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiUrl}/movies/${id}`);
  }

  saveMovie(movie:Movie): Observable<Movie[]> {
    return this.httpClient.post<Movie[]>(`${this.apiUrl}/movies`,movie);
  }
 
}
