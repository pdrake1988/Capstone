import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {
  ticket = true;
  movie: Movie;
  ticketTime: string;
  ticketType: string;
  showtime: string[];
  movieId: number;
  constructor(private route: ActivatedRoute, private movieService: MovieServiceService,
    private router: Router) { }

  async ngOnInit() {
    this.movieId = this.route.snapshot.params.id;
    this.movie = await this.movieService.getMovie(this.movieId)
    this.showtime = this.movie.showtimes.split(",");
  }
  Reciept() {
    this.ticket = false;
  }
}
interface Movie {
  id?: number;
  title: string;
  showtimes: string;
  description: string;
}
