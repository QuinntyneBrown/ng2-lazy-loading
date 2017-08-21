import {Component} from "@angular/core";
import { Storage } from "../shared/services/storage.service";

@Component({
    templateUrl: "./customer-landing-page.component.html",
    styleUrls: ["./customer-landing-page.component.css"],
    selector: "customer-landing-page"
})
export class CustomerLandingPageComponent { 
    constructor(private _storage: Storage) {

    }

    ngOnInit() {
        this._storage.put({
            name: "something", value: { foo: true }
        });
    }
}
