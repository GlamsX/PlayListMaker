import { NgModule } from "@angular/core";

import { ProfileComponent } from "./profile.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";


const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
    }
];

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        CommonModule,
        NzLayoutModule,
        NzPageHeaderModule,
        NzCardModule,
        NzFormModule,
        NzButtonModule
    ],
})
export class ProfileModule { }