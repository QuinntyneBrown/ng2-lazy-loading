import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from "./landing";

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'customer',
        loadChildren: './customers/customer.module#CustomerModule'
    }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    LandingPageComponent
];

