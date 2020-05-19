import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConventionComponent } from './convention/convention.component';
import { HttpClientModule }    from '@angular/common/http';


const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    {path: 'convention', component: ConventionComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
