import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialFormComponent } from './InitialForm/initial-form/initial-form.component';
import { LandingComponent } from './Landing/landing/landing.component';

const routes: Routes = [
  {
    path: 'initial-survey',
    component: InitialFormComponent
  },
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: '',
    redirectTo: '/initial-survey',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
