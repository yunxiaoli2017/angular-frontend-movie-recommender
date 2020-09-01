import { Component, OnInit, Renderer2 } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RatingForm } from '../rating-form';
import { Rating } from '../rating';

@Component({
  selector: 'app-submit-rating',
  templateUrl: './submit-rating.component.html',
  styleUrls: ['./submit-rating.component.css']
})
export class SubmitRatingComponent implements OnInit {

  movies: Movie[];
  numMovies: number;
  ratingFormArray: FormArray;
  regenerateForm: FormControl;
  ratingForm: RatingForm;
  // formGroup = new FormGroup({
  //   ratingFormArray: new FormArray([])
  // });
  formGroup: FormGroup;
  noRatingError: boolean;

  constructor(private movieService: MovieService,
              private formBuilder: FormBuilder,
              private renderer: Renderer2,
              private router: Router) { 
                this.renderer.removeClass(document.body, 'black-background-color');
                this.renderer.addClass(document.body, 'grey-background-color');
                this.numMovies = 32;
                this.noRatingError = false;
               }

  ngOnInit(): void {
    this.loadMovies(this.numMovies);
    // this.ratingFormArray = this.formBuilder.array([ ]);
    this.regenerateForm = new FormControl(32);
    // for (let {} of this.movies) {
    //   this.ratingFormArray.push(this.createForm());
    // }
  }

  createForm(): FormControl {
    return new FormControl(0);
  }

  addRatingForm(): void {
    this.ratingFormArray = this.formGroup.get('ratingFormArray') as FormArray;
    this.ratingFormArray.push(this.formBuilder.group({
                                rating: new FormControl(0)
                              }));
  }

  loadMovies(numMovies: number): void {
    this.movieService.getRandomMovies(numMovies).subscribe(movies => {
        this.movies = movies as Movie[];
        this.formGroup = this.formBuilder.group({
          ratingFormArray: this.formBuilder.array([ ])
        });
        for (let {} of this.movies) {
          this.addRatingForm();
        }
      });
  }

  onFormSubmit(): void {
    this.ratingForm = new RatingForm();
    this.ratingForm.ratings = new Array<Rating>();
    this.ratingFormArray = this.formGroup.get('ratingFormArray') as FormArray;
    for (let i = 0; i < this.movies.length; i++) {
      const rating = new Rating();
      rating.movieId = this.movies[i].id;
      rating.rating = this.ratingFormArray.at(i).get('rating').value;
      if (rating.rating > 0) {
        this.ratingForm.ratings.push(rating);
      }
    }
    if (this.ratingForm.ratings.length > 0) {
      this.movieService.getRecommendedMovies(this.ratingForm).subscribe(movies => {
        this.movieService.recommendedMovies = movies as Movie[];
        this.gotoRecommendation();
      });
    } else {
      this.noRatingError = true;
      console.log("Reached noRatingError")
      this.loadMovies(0);
    }
  }

  regenerateMovies(): void {
    this.noRatingError = false;
    this.numMovies = this.regenerateForm.value;
    this.loadMovies(this.numMovies);
  }

  gotoRecommendation(): void {
    this.router.navigate(['/recommendation']);
  }

}
