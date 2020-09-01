import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitRatingComponent } from './submit-rating/submit-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { GetRecommendationComponent } from './get-recommendation/get-recommendation.component' 

@NgModule({
  declarations: [
    AppComponent,
    SubmitRatingComponent,
    LandingComponent,
    GetRecommendationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
