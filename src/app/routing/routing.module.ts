import { Routes, RouterModule } from '@angular/router';

import {
	LandingPageComponent
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'customer',
        loadChildren: '../modules/customer/customer.module#CustomerModule'
    },
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    LandingPageComponent
];

