import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitRatingComponent } from './submit-rating/submit-rating.component';
import { LandingComponent } from './landing/landing.component';
import { GetRecommendationComponent } from './get-recommendation/get-recommendation.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'rate', component: SubmitRatingComponent },
  { path: 'recommendation', component: GetRecommendationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
