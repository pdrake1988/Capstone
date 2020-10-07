import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movies: Movie[];
  public newMovie: Movie = {title: '', showtimes: '', description: ''}
  constructor(private movieService: MovieServiceService, private router: Router) { }

  async ngOnInit() {
    this.movies = await this.movieService.getMovies();
  }
  async save() {
    this.movieService.postMovie(this.newMovie);
    this.newMovie = { title: '', showtimes: '', description: ''};
    this.movies = await this.movieService.getMovies();
  }
  Showtimes(id) {
    this.router.navigate(['showtimes', id]);
  }
}

interface Movie {
  id?: number;
  title: string;
  showtimes: string;
  description: string;
}