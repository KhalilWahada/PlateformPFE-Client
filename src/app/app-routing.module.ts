import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConventionComponent } from './convention/convention.component';
import { HttpClientModule }    from '@angular/common/http';

import {FicheComponent} from './fiche/fiche.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SessionComponent } from './session/session.component';
import { ChangepwdComponent } from'./changepwd/changepwd.component'
import { ListsessionComponent } from './session/listsession/listsession.component';
import { ListficheComponent } from './fiche/listfiche/listfiche.component';
import { SoutenanceComponent } from './soutenance/soutenance.component';
import { DataResolverService } from './data-resolver.service';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent,canActivate: [AuthGuard], children: [
    {path: 'convention', component: ConventionComponent },
    {path: 'session', component: SessionComponent },
    {path: 'fiche', component: FicheComponent },
    {path: 'changepwd', component: ChangepwdComponent },
    {path: 'test', component: ListsessionComponent },
    {path: 'all', component: ListficheComponent },
    {path: 'sou', component: SoutenanceComponent ,
    resolve: {
      sessions: DataResolverService
    }},

    
  

] },
      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
