import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  public movies: Movie[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }
  async getMovies() {
    return await this.http.get<Movie[]>(this.baseUrl + 'movie').toPromise();
  }
  async postMovie(movie) {
    return await this.http.post<Movie[]>(this.baseUrl + 'movie', movie).toPromise();
  }
  async getMovie(id) {
    return await this.http.get<Movie>(this.baseUrl + 'movie/' + id).toPromise();
  }
}
interface Movie {
  id?: number;
  title: string;
  showtimes: string;
  description: string;
}