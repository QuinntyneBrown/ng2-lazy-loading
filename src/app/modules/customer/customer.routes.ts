import {RouterModule, Routes } from '@angular/router';

import { CustomerLandingPageComponent } from "./customer-landing-page.component";

const CUSTOMER_ROUTES: Routes = [{
    path: '',
    component: CustomerLandingPageComponent
}];

export const CustomerRouterModule = RouterModule.forChild(CUSTOMER_ROUTES);


export const routedComponents = [
    CustomerLandingPageComponent
];