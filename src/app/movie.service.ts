import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RatingForm } from './rating-form';
import { Movie } from './movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = environment.apiUrl;
  recommendedMovies: Movie[];

  constructor(private http: HttpClient) { }

  getRandomMovies(numMovies: number): Observable<any> {
    const params = new HttpParams().append('numMovies', String(numMovies));
    return this.http.get(`${this.baseUrl}/rate`, {params});
  }

  getRecommendedMovies(ratingForm: RatingForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/recommendation`, ratingForm);
  }

}
