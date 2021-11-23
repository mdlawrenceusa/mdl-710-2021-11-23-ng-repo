import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ArtPortfolioComponent } from './art-portfolio/art-portfolio.component';
import { StartComponent } from './start/start.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PhotoPortfolioComponent } from './photo-portfolio/photo-portfolio.component';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ArtPortfolioComponent,
    StartComponent,
    TopBarComponent,
    PhotoPortfolioComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
