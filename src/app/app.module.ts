
import { CustomerInfoService } from './shared/customer-info.service';
import { CustomerInfoComponent } from './customer-data-system/customer-info/customer-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CustomerDataSystemComponent } from './customer-data-system/customer-data-system.component';
import { ListComponent } from './customer-data-system/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





 
@NgModule({
  declarations: [
    AppComponent,
    CustomerDataSystemComponent,
    ListComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxDatatableModule,
    NgbModule
  ],
  providers: [CustomerInfoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
