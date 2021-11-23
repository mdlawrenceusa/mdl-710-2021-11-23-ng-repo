import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ArtPortfolioComponent } from './art-portfolio/art-portfolio.component';
import { StartComponent } from './start/start.component';
import { PhotoPortfolioComponent } from './photo-portfolio/photo-portfolio.component';


const routes: Routes = [
  
        { path: 'resume', component: ResumeComponent },
        { path: 'art', component: ArtPortfolioComponent },
        { path: '', component: StartComponent },
        { path: 'photo', component: PhotoPortfolioComponent },




  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
