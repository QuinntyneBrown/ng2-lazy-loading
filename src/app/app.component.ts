import {Component} from "@angular/core";
import { Storage } from "./shared/services/storage.service";

@Component({
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "app"
})
export class AppComponent {
    constructor(private _storage: Storage) {

    }

    ngOnInit() {
        this._storage.put({
            name: "something", value: { foo: true }
        });
    }

}
