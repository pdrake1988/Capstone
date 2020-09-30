import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movies: Movie[];
  public newMovie: Movie = {title: '', showtimes: '', description: ''}
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  async ngOnInit() {
    this.movies = await this.http.get<Movie[]>(this.baseUrl + 'movie').toPromise();
    }
  async save() {
    await this.http.post<Movie[]>(this.baseUrl + 'movie', this.newMovie).toPromise();
    this.newMovie = { title: '', showtimes: '', description: ''};
    this.movies = await this.http.get<Movie[]>(this.baseUrl + 'movie').toPromise();
  }

}

interface Movie {
  title: string;
  showtimes: string;
  description: string;
}