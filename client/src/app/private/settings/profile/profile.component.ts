import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-profile-settings",
    templateUrl: "./profile.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {

    formGroup: FormGroup;

    constructor(
        private readonly fb: FormBuilder,
    ) {
        this.formGroup = this.createForm()
    }

    ngOnInit(): void {
    }

    createForm() {
        return this.fb.group({
            name: [null, [Validators.required]],
        })
    }

    submit() {
        console.log("submit");
    }
}