import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from "src/app/service/movie.service";

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss']
})
export class AddMoviesComponent implements OnInit {

  movie: Movie = {
    title: "",
    img: "",
    category:"",
    status:""
  }
  constructor( private movieService:MovieService) { }

  ngOnInit() {
  }
  
  saveNewMovie(){
    this.movieService.saveMovie(this.movie).subscribe(
      res => {
        console.log(res)

      },
      err => console.log(err)
    )
  }
}
