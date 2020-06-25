import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from '../app/components/login/login.component';
import { DetailsComponent } from '../app/components/details/details.component';
import { ProfessionalComponent } from './components/professional/professional.component';

const routes: Routes = [
  {path : '', component: LoginComponent },
  {path : 'login', component: LoginComponent },
  {path : 'details', component: DetailsComponent },
  {path : 'professional', component: ProfessionalComponent },
  //{path : 'details', component: DetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
