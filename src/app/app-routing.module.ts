import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Securities/Authentication/auth-guard'
import { LoginComponent } from './components/loginComponent/login/login.component';
import { LandingPageComponent } from './components/landingPage/landing-page/landing-page.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: LandingPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
