import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./customer-landing-page.component.html"),
    styles: [require("./customer-landing-page.component.scss")],
    selector: "customer-landing-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerLandingPageComponent implements OnInit { 
    ngOnInit() {

    }
}
