import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "src/app/service/movie.service";
import { Movie } from "src/app/models/movie.interface";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(data => {
      this.movieService
        .getMovie(data.id)
        .subscribe(movie => (this.movie = movie));
    });
  }
}
