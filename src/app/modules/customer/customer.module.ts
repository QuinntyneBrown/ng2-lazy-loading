import { NgModule } from '@angular/core';
import { CustomerRouterModule, routedComponents } from "./customer.routes";

const declarables = [];
const providers = [];

@NgModule({
    imports: [CustomerRouterModule],
    declarations: [routedComponents],
	providers: providers
})
export class CustomerModule { }
