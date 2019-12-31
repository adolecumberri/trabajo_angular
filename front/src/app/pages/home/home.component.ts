import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/service/movie.service";
import { Movie } from "src/app/models/movie.interface";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movie: Movie[];
  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit() {
    this.router.params.subscribe(data => {
      this.movieService
        .getMovies(data.id)
        .subscribe(movie => (this.movie = movie));
      });
    }

  //   this.movieService.getMovies().subscribe(
  //     res => this.movie = res;
  //   ),
  //   err => console.log(err)
  // }
  
}
