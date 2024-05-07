import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';





@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        RouterTestingModule,
        HttpClientModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    
    declarations: [
        AppComponent,
        DashboardComponent,
        PeoplesComponent,
        PersonDetailComponent,
        MessagesComponent,
        //PersonSearchComponent
  ],

  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }