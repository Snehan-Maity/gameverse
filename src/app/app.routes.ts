import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from "./features/features.component";
import { GameComponent } from './game/game.component';
/*import { GameClassifierComponent } from './game-classifier/game-classifier.component';
import { ReportAbuseComponent } from './report-abuse/report-abuse.component';
import { ResponsibleGamingComponent } from './responsible-gaming/responsible-gaming.component';
import { EducationComponent } from './education/education.component';*/

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'navBar', component: NavBarComponent }, // Default route
   { path: 'game', component:GameComponent },
  { path: 'features', component: FeaturesComponent }, // Default route

 /* { path: 'classifier', component: GameClassifierComponent },
  { path: 'report', component: ReportAbuseComponent },
  { path: 'responsible-gaming', component: ResponsibleGamingComponent },
  { path: 'education', component: EducationComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
