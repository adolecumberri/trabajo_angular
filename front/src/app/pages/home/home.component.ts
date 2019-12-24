import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/service/movie.service";
import { Movie } from "src/app/models/movie.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => (this.movies = movies));
  }
}
