import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private service: HttpService) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    // tslint:disable-next-line: deprecation
    this.service.getMovieList().subscribe(list => {
      this.movies = list;
    });
  }

  deleteMovie(id: number): any {
    this.service.deleteMovie(id).subscribe(
      () => {
        this.getMovies();
      }
    );
  }

}
