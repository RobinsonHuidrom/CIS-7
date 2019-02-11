
import { CustomerInfoService } from './shared/customer-info.service';
import { CustomerInfoComponent } from './customer-data-system/customer-info/customer-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CustomerDataSystemComponent } from './customer-data-system/customer-data-system.component';
import { ListComponent } from './customer-data-system/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { GrdFilterPipe } from './../app/extra/filter.pipe';
=======
>>>>>>> d049a1bd96a45b7234ab5d6fd7e6fc45defef051


 
@NgModule({
  declarations: [
    AppComponent,
    CustomerDataSystemComponent,
    ListComponent,
    CustomerInfoComponent,
<<<<<<< HEAD
    GrdFilterPipe
=======
>>>>>>> d049a1bd96a45b7234ab5d6fd7e6fc45defef051
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    
  ],
  providers: [CustomerInfoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
