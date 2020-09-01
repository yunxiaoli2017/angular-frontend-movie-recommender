import { Component, OnInit, Renderer2 } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-get-recommendation',
  templateUrl: './get-recommendation.component.html',
  styleUrls: ['./get-recommendation.component.css']
})
export class GetRecommendationComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService,
              private renderer: Renderer2) {
                this.renderer.removeClass(document.body, 'black-background-color');
                this.renderer.addClass(document.body, 'grey-background-color');
                this.movies = this.movieService.recommendedMovies;
               }

  ngOnInit(): void {
  }

}
