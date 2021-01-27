import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConventionComponent } from './convention/convention.component';
import { HttpClientModule } from '@angular/common/http';
import { FicheComponent } from './fiche/fiche.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SessionComponent } from './dds/session/session.component';
import { ChangepwdComponent } from './changepwd/changepwd.component'
import { ListficheComponent } from './dds/listfiche/listfiche.component';
import { DataResolverService } from './_services/data-resolver.service';
import { FichenontraiterComponent } from './dds/fichenontraiter/fichenontraiter.component';
import { FicheencoursComponent } from './dds/ficheencours/ficheencours.component';
import { ListconventionComponent } from './dds/listconvention/listconvention.component';
import { ListsessionComponent } from './dds/listsession/listsession.component';
import { SoutenanceComponent } from './dds/soutenance/soutenance.component';
import { CreatesoutenanceComponent } from './dds/createsoutenance/createsoutenance.component';
import { ListdemandeComponent } from './dds/listdemande/listdemande.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'convention', component: ConventionComponent },
      { path: 'session', component: SessionComponent },
      { path: 'fiche', component: FicheComponent },
      { path: 'changepwd', component: ChangepwdComponent },
      { path: 'sessions', component: ListsessionComponent },
      { path: 'fiches', component: ListficheComponent },
      { path: 'soutenances/create', component: CreatesoutenanceComponent },
      { path: 'fiches/en_attente', component: FichenontraiterComponent },
      { path: 'fiches/en_cours', component: FicheencoursComponent },
      { path: 'conventions', component: ListconventionComponent },
      { path: 'demande', component: ListdemandeComponent },

      {
        path: 'soutenances', component: SoutenanceComponent,
        resolve: {
          soutenances: DataResolverService
        }
      },




    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
