import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "app-services",
    templateUrl: "./services.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {

    services = [
        {
            name: "spotify",
            icon: "spotify",
            status: true,
        },
        {
            name: "youtube",
            icon: "youtube",
            status: false,
        },
        {
            name: "netflix",
            icon: "netflix",
            status: false,
        },
        {
            name: "amazon music",
            icon: "amazon",
            status: true,
        },
        {
            name: "deezer",
            icon: "deezer",
            status: false,
        }
    ]

    constructor() {
    }
}