import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MisNegociosComponent } from './mis-negocios/mis-negocios.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [],
        children: [
            { path: 'mis-negocios', component: MisNegociosComponent , data: { titulo: 'Mis Negocios' } },
            { path: '', redirectTo: '/login', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );