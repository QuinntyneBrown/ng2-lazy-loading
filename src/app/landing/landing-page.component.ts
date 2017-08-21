import { Component } from "@angular/core";
import { Storage } from "../shared/services/storage.service";

@Component({
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.css"],
    selector: "landing-page"
})
export class LandingPageComponent {
    constructor(private _storage: Storage) {

    }

    ngOnInit() { 
        this._storage.put({
            name: "something", value: { foo: true }
        });
    }
}
