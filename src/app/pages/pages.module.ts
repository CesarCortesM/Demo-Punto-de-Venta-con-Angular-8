import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { AgmCoreModule  } from '@agm/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { MisNegociosComponent } from './mis-negocios/mis-negocios.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
    declarations: [
        PagesComponent,
        MisNegociosComponent,
        NavComponent,
    ],
    exports: [
        MisNegociosComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PAGES_ROUTES,
        MDBBootstrapModulesPro.forRoot(),
        AgmCoreModule.forRoot({
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
            apiKey: '',
        }),
    ],
    providers: [
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class PagesModule { }