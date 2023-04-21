import { NgModule } from "@angular/core";
import { GeneratorComponent } from "./generator.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";

const routes: Routes = [
    {
        path: '',
        component: GeneratorComponent,
    }
];

@NgModule({
    declarations: [GeneratorComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        NzLayoutModule,
        NzButtonModule,
        NzCardModule,
        ReactiveFormsModule,
        NzFormModule
    ],
})
export class GeneratorModule { }