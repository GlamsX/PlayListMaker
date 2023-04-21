import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";

@Component({
    selector: "app-root",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {

    loggin$ = this.authService.getLogStatus();

    constructor(
        private readonly authService: AuthService
    ) {
    }

    ngOnInit() {
        this.authService.setLogginStatus();
    }

    print_data() {
        console.log("Hello World");
    }

    loggin() {
        this.authService.loggIn();
    }

    logout() {
        this.authService.loggOut();
    }
}