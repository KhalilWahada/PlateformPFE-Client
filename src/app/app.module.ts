

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConventionComponent } from './convention/convention.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { MatTabsModule } from '@angular/material/tabs';

import { FicheComponent } from './fiche/fiche.component';
import { SessionComponent } from './dds/session/session.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ListficheComponent } from './dds/listfiche/listfiche.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { DialogComponent } from './dialog/dialog.component';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FichedetailsComponent } from './dds/fichedetails/fichedetails.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FichenontraiterComponent } from './dds/fichenontraiter/fichenontraiter.component';
import { FicheencoursComponent } from './dds/ficheencours/ficheencours.component';
import { ListconventionComponent } from './dds/listconvention/listconvention.component';
import { ListsessionComponent } from './dds/listsession/listsession.component';
import { CreatesoutenanceComponent } from './dds/createsoutenance/createsoutenance.component';
import { SoutenanceComponent } from './dds/soutenance/soutenance.component';
import { EtudiantdetailsComponent } from './dds/etudiantdetails/etudiantdetails.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ListesoutenanceComponent } from './dds/listesoutenance/listesoutenance.component';
import { ListdemandeComponent } from './dds/listdemande/listdemande.component';
import { SessioncurrentComponent } from './dds/sessioncurrent/sessioncurrent.component';
import { ValidationficheComponent } from './dds/validationfiche/validationfiche.component';
import { HistoryComponent } from './dds/history/history.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [

    SoutenanceComponent,

    AppComponent,
    LoginComponent,
    HomeComponent,
    ConventionComponent,
    SessionComponent,
    FicheComponent,
    ChangepwdComponent,
    ListsessionComponent,
    ListficheComponent,
    DialogComponent,
    CreatesoutenanceComponent,
    FichedetailsComponent,
    FichenontraiterComponent,
    FicheencoursComponent,
    ListconventionComponent,
    EtudiantdetailsComponent,
    ListesoutenanceComponent,
    ListdemandeComponent,
    SessioncurrentComponent,
    ValidationficheComponent,
    HistoryComponent,


  ],
  imports: [
    CdkStepperModule,
    MatStepperModule,
    MatPaginatorModule,
    MatInputModule,
    MatNativeDateModule, MatFormFieldModule, MatDatepickerModule,
    MatButtonModule,
    SatDatepickerModule, SatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSortModule,
    MatSelectModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })


  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
