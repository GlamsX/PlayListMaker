import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "app-generator",
    templateUrl: "./generator.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratorComponent {
    constructor() {
    }
}