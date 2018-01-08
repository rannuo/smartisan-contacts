import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { GroupListComponent } from './group-list/group-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

import { ContactService } from './contact.service';

import { FmtPhonenumPipe } from './pipes/fmt-phonenum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    ContactListComponent,
    ContactDetailComponent,
    FmtPhonenumPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
