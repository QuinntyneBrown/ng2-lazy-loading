import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./components/header.component";
import { PageTitleComponent } from "./components/page-title.component";

import { Storage } from "./services/storage.service";

const declarables = [
    HeaderComponent,
    PageTitleComponent
];

const providers = [Storage];

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule],
    exports: [declarables],
    declarations: [declarables],
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: providers
        };
    }
}
