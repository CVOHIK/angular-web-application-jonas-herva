import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationInfoModalComponent } from './education-info-modal/education-info-modal.component';
import { CompanyInfoModalComponent } from './company-info-modal/company-info-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    EducationInfoModalComponent,
    CompanyInfoModalComponent
  ],
  entryComponents: [
    EducationInfoModalComponent,
    CompanyInfoModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
