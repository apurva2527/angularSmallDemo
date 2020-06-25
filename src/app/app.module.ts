import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfessionalComponent } from './components/professional/professional.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    NavComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
