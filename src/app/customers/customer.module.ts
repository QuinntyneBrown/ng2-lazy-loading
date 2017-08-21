import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLandingPageComponent } from "./customer-landing-page.component";
import { SharedModule } from "../shared/shared.module";

const declarables = [CustomerLandingPageComponent];
const providers = [];

const CUSTOMER_ROUTES: Routes = [{
    path: '',
    component: CustomerLandingPageComponent
}];

@NgModule({
    imports: [RouterModule.forChild(CUSTOMER_ROUTES), SharedModule],
    declarations: declarables,
	providers: providers
})
export class CustomerModule { }
