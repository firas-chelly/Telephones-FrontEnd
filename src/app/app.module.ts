import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TelephonesComponent } from './telephones/telephones.component';
import { AddTelephoneComponent } from './add-telephone/add-telephone.component';
import { UpdateTelephoneComponent } from './update-telephone/update-telephone.component';

@NgModule({
  declarations: [
    AppComponent,
    TelephonesComponent,
    AddTelephoneComponent,
    UpdateTelephoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
